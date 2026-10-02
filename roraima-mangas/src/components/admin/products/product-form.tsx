"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const productFormSchema = z.object({
  name: z
    .string()
    .min(1, "O nome do produto é obrigatório."),

  slug: z
    .string()
    .min(1, "O slug do produto é obrigatório."),

  description: z
    .string()
    .optional(),

  price: z
    .number()
    .positive("O preço deve ser maior que zero."),

  compareAtPrice: z
    .number()
    .positive("O preço anterior deve ser maior que zero.")
    .optional(),

  sku: z
    .string()
    .optional(),

  status: z
    .enum(["ACTIVE", "INACTIVE", "OUT_OF_STOCK"]),

  featured: z
    .boolean(),

  isNew: z
    .boolean(),

  images: z
    .array(z.instanceof(File)),
});

type ProductFormData = z.infer<typeof productFormSchema>;

export type ProductFormInitialData = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  price: number;
  compareAtPrice?: number | null;
  sku?: string | null;
  status: "ACTIVE" | "INACTIVE" | "OUT_OF_STOCK";
  featured: boolean;
  isNew: boolean;
  images: {
    image: string;
    order: number;
  }[];
};

type ProductFormProps = {
  product?: ProductFormInitialData;
  onSuccess?: () => void;
};

function generateSlug(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function ProductForm({
  product,
  onSuccess,
}: ProductFormProps) {
  const isEditing = Boolean(product);

  const [previews, setPreviews] = useState<string[]>([]);

  const [existingImages, setExistingImages] = useState<string[]>(
    product?.images
      .sort((a, b) => a.order - b.order)
      .map((image) => image.image) ?? []
  );

  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productFormSchema),

    defaultValues: {
      name: product?.name ?? "",
      slug: product?.slug ?? "",
      description: product?.description ?? "",

      price: product
        ? Number(product.price)
        : undefined,

      compareAtPrice:
        product?.compareAtPrice != null
          ? Number(product.compareAtPrice)
          : undefined,

      sku: product?.sku ?? "",
      status: product?.status ?? "ACTIVE",
      featured: product?.featured ?? false,
      isNew: product?.isNew ?? false,
      images: [],
    },
  });

  const name = watch("name");
  const images = watch("images");

  useEffect(() => {
    if (!name) {
      return;
    }

    setValue("slug", generateSlug(name));
  }, [name, setValue]);

  useEffect(() => {
    const urls = images.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews(urls);

    return () => {
      urls.forEach((url) =>
        URL.revokeObjectURL(url)
      );
    };
  }, [images]);

  function handleImagesChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = Array.from(
      event.target.files ?? []
    );

    if (files.length === 0) {
      return;
    }

    setValue("images", files, {
      shouldValidate: true,
    });
  }

  function removeExistingImage(index: number) {
    setExistingImages((current) =>
      current.filter(
        (_, imageIndex) => imageIndex !== index
      )
    );
  }

  async function uploadImage(file: File) {
    let uploadResponse: Response;

    try {
      uploadResponse = await fetch(
        "/api/uploads/image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileName: file.name,
            contentType: file.type,
            folder: "products",
          }),
        }
      );
    } catch (error) {
      console.error("Falha ao solicitar URL de upload:", error);
      throw new Error(
        "Não foi possível preparar o envio da imagem. Verifique a conexão e tente novamente."
      );
    }

    let uploadData: {
      message?: string;
      uploadUrl?: string;
      publicUrl?: string;
    };

    try {
      uploadData = await uploadResponse.json();
    } catch (error) {
      console.error("Resposta inválida ao solicitar URL de upload:", error);
      throw new Error(
        "Não foi possível preparar o envio da imagem. Tente novamente."
      );
    }

    if (!uploadResponse.ok) {
      throw new Error(
        uploadData.message ??
          "Não foi possível preparar o upload."
      );
    }

    if (!uploadData.uploadUrl || !uploadData.publicUrl) {
      console.error("A API de upload retornou URLs incompletas.");
      throw new Error(
        "Não foi possível preparar o envio da imagem. Tente novamente."
      );
    }

    let r2Response: Response;

    try {
      r2Response = await fetch(uploadData.uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });
    } catch (error) {
      // A URL assinada contém credenciais temporárias; não a inclua no log.
      console.error("Falha de rede/CORS durante o PUT para o R2:", error);
      throw new Error(
        "Não foi possível enviar a imagem. Verifique a conexão e a configuração de CORS do armazenamento, depois tente novamente."
      );
    }

    if (!r2Response.ok) {
      console.error(
        "O R2 recusou o upload da imagem:",
        r2Response.status,
        r2Response.statusText
      );
      throw new Error("Não foi possível enviar a imagem. Tente novamente.");
    }

    return uploadData.publicUrl;
  }

  async function onSubmit(data: ProductFormData) {
    try {
      setSubmitError("");

      let imageUrls = existingImages;

      if (data.images.length > 0) {
        imageUrls = await Promise.all(
          data.images.map((file) =>
            uploadImage(file)
          )
        );
      }

      if (imageUrls.length === 0) {
        throw new Error(
          "O produto deve possuir pelo menos uma imagem."
        );
      }

      const payload = {
        name: data.name,
        slug: data.slug,
        description:
          data.description || undefined,
        price: data.price,
        compareAtPrice:
          data.compareAtPrice || undefined,
        sku: data.sku || undefined,
        status: data.status,
        featured: data.featured,
        isNew: data.isNew,
        images: imageUrls.map(
          (image, index) => ({
            image,
            order: index,
          })
        ),
      };

      const response = await fetch(
        isEditing
          ? `/api/products/${product!.id}`
          : "/api/products",
        {
          method: isEditing ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ??
            (
              isEditing
                ? "Não foi possível atualizar o produto."
                : "Não foi possível criar o produto."
            )
        );
      }

      onSuccess?.();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : (
              isEditing
                ? "Ocorreu um erro ao atualizar o produto."
                : "Ocorreu um erro ao criar o produto."
            )
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name">
          Nome
        </label>

        <input
          id="name"
          type="text"
          {...register("name")}
        />

        {errors.name && (
          <p>{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="slug">
          Slug
        </label>

        <input
          id="slug"
          type="text"
          {...register("slug")}
        />

        {errors.slug && (
          <p>{errors.slug.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description">
          Descrição
        </label>

        <textarea
          id="description"
          {...register("description")}
        />
      </div>

      <div>
        <label htmlFor="price">
          Preço
        </label>

        <input
          id="price"
          type="number"
          step="0.01"
          {...register("price", {
            valueAsNumber: true,
          })}
        />

        {errors.price && (
          <p>{errors.price.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="compareAtPrice">
          Preço anterior
        </label>

        <input
          id="compareAtPrice"
          type="number"
          step="0.01"
          {...register("compareAtPrice", {
            setValueAs: (value) =>
              value === ""
                ? undefined
                : Number(value),
          })}
        />

        {errors.compareAtPrice && (
          <p>
            {errors.compareAtPrice.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="sku">
          SKU
        </label>

        <input
          id="sku"
          type="text"
          {...register("sku")}
        />

        {errors.sku && (
          <p>{errors.sku.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="status">
          Status
        </label>

        <select
          id="status"
          {...register("status")}
        >
          <option value="ACTIVE">
            Ativo
          </option>

          <option value="INACTIVE">
            Inativo
          </option>

          <option value="OUT_OF_STOCK">
            Sem estoque
          </option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            {...register("featured")}
          />

          Destaque
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            {...register("isNew")}
          />

          Produto novo
        </label>
      </div>

      {isEditing &&
        existingImages.length > 0 && (
          <div>
            <p>Imagens atuais:</p>

            <div className="flex gap-4 flex-wrap">
              {existingImages.map(
                (image, index) => (
                  <div key={image}>
                    <img
                      src={image}
                      alt={`Imagem atual ${index + 1}`}
                      className="w-32 h-32 object-cover"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeExistingImage(index)
                      }
                    >
                      Remover
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        )}

      <div>
        <label htmlFor="images">
          {isEditing
            ? "Substituir imagens"
            : "Imagens"}
        </label>

        <input
          id="images"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          multiple
          onChange={handleImagesChange}
        />

        {!isEditing &&
          errors.images && (
            <p>
              {errors.images.message}
            </p>
          )}
      </div>

      {previews.length > 0 && (
        <div>
          <p>Novas imagens:</p>

          <div className="flex gap-4 flex-wrap">
            {previews.map(
              (preview, index) => (
                <img
                  key={preview}
                  src={preview}
                  alt={`Nova imagem ${index + 1}`}
                  className="w-32 h-32 object-cover"
                />
              )
            )}
          </div>
        </div>
      )}

      {submitError && (
        <p>{submitError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? isEditing
            ? "Salvando..."
            : "Cadastrando..."
          : isEditing
            ? "Salvar alterações"
            : "Cadastrar produto"}
      </button>
    </form>
  );
}
