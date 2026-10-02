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
    .array(z.instanceof(File))
    .min(1, "Adicione pelo menos uma imagem."),
});

type ProductFormData = z.infer<typeof productFormSchema>;

type ProductFormProps = {
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
  onSuccess,
}: ProductFormProps) {
  const [previews, setPreviews] = useState<string[]>([]);
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
      name: "",
      slug: "",
      description: "",
      sku: "",
      status: "ACTIVE",
      featured: false,
      isNew: false,
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
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  function handleImagesChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = Array.from(event.target.files ?? []);

    if (files.length === 0) {
      return;
    }

    setValue("images", files, {
      shouldValidate: true,
    });
  }

  async function uploadImage(file: File) {
    const uploadResponse = await fetch(
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

    const uploadData = await uploadResponse.json();

    if (!uploadResponse.ok) {
      throw new Error(
        uploadData.message ??
          "Não foi possível preparar o upload."
      );
    }

    const r2Response = await fetch(
      uploadData.uploadUrl,
      {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      }
    );

    if (!r2Response.ok) {
      throw new Error(
        "Não foi possível enviar a imagem."
      );
    }

    return uploadData.publicUrl as string;
  }

  async function onSubmit(data: ProductFormData) {
    try {
      setSubmitError("");

      const imageUrls = await Promise.all(
        data.images.map((file) => uploadImage(file))
      );

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          slug: data.slug,
          description: data.description || undefined,
          price: data.price,
          compareAtPrice:
            data.compareAtPrice || undefined,
          sku: data.sku || undefined,
          status: data.status,
          featured: data.featured,
          isNew: data.isNew,
          images: imageUrls.map((image, index) => ({
            image,
            order: index,
          })),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ??
            "Não foi possível criar o produto."
        );
      }

      onSuccess?.();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao criar o produto."
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
              value === "" ? undefined : Number(value),
          })}
        />

        {errors.compareAtPrice && (
          <p>{errors.compareAtPrice.message}</p>
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

      <div>
        <label htmlFor="images">
          Imagens
        </label>

        <input
          id="images"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          multiple
          onChange={handleImagesChange}
        />

        {errors.images && (
          <p>{errors.images.message}</p>
        )}
      </div>

      {previews.length > 0 && (
        <div>
          <p>Imagens selecionadas:</p>

          <div className="flex gap-4 flex-wrap">
            {previews.map((preview, index) => (
              <img
                key={preview}
                src={preview}
                alt={`Imagem ${index + 1}`}
                className="w-32 h-32 object-cover"
              />
            ))}
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
          ? "Cadastrando..."
          : "Cadastrar produto"}
      </button>
    </form>
  );
}