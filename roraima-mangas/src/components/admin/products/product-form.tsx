"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const productFormSchema = z.object({
  name: z
    .string()
    .min(1, "O nome do produto é obrigatório."),

  description: z
    .string()
    .optional(),

  price: z
    .number()
    .positive("O preço deve ser maior que zero."),
  categoryId: z.string().optional(),
  collectionIds: z.array(z.string()),

  stock: z.number().int().min(0, "O estoque não pode ser negativo."),
  details: z.array(z.object({ title: z.string().min(1), value: z.string().min(1) })),

  status: z
    .enum(["ACTIVE", "INACTIVE"]),

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
  description?: string | null;
  price: number;
  stock: number;
  details: { title: string; value: string }[];
  categoryId?: string | null;
  collections?: { collection: { id: string } }[];
  status: "ACTIVE" | "INACTIVE";
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

export default function ProductForm({
  product,
  onSuccess,
}: ProductFormProps) {
  const isEditing = Boolean(product);

  const [previews, setPreviews] = useState<string[]>([]);
  const [priceText, setPriceText] = useState(product ? Number(product.price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : "");
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [collections, setCollections] = useState<{ id: string; name: string }[]>([]);

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
    control,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productFormSchema),

    defaultValues: {
      name: product?.name ?? "",
      description: product?.description ?? "",

      price: product
        ? Number(product.price)
        : undefined,

      stock: product?.stock ?? 0,
      details: product?.details ?? [],
      categoryId: product?.categoryId ?? "",
      collectionIds: product?.collections?.map(({ collection }) => collection.id) ?? [],
      status: product?.status ?? "ACTIVE",
      featured: product?.featured ?? false,
      isNew: product?.isNew ?? false,
      images: [],
    },
  });

  const images = watch("images");
  const selectedCollections = watch("collectionIds");
  const { fields: detailFields, append, remove } = useFieldArray({ control, name: "details" });

  useEffect(() => {
    void Promise.all([fetch("/api/categories"), fetch("/api/collections")]).then(async ([categoryResponse, collectionResponse]) => {
      const [categoryData, collectionData] = await Promise.all([categoryResponse.json(), collectionResponse.json()]);
      setCategories(categoryData.categories ?? []);
      setCollections(collectionData.collections ?? []);
    }).catch((error) => console.error("Não foi possível carregar categorias e coleções do formulário:", error));
  }, []);

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
        description:
          data.description || undefined,
        price: data.price,
        stock: data.stock,
        details: data.details,
        categoryId: data.categoryId || undefined,
        collectionIds: data.collectionIds,
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
          type="text"
          inputMode="decimal"
          value={priceText}
          onChange={(event) => {
            const text = event.target.value;
            setPriceText(text);
            const raw = text.replace(/R\$\s?/g, "").trim();
            const normalized = (raw.includes(",") ? raw.replace(/\./g, "").replace(",", ".") : raw).replace(/[^0-9.]/g, "");
            const value = Number(normalized);
            setValue("price", value, { shouldValidate: true });
          }}
          onBlur={() => {
            const value = watch("price");
            if (Number.isFinite(value) && value > 0) setPriceText(value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
          }}
        />

        {errors.price && (
          <p>{errors.price.message}</p>
        )}
      </div>

      <div><label htmlFor="stock">Estoque</label><input id="stock" type="number" min="0" step="1" {...register("stock", { valueAsNumber: true })} />{errors.stock && <p role="alert">{errors.stock.message}</p>}</div>

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

        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">Categoria<select className="w-full border p-2" {...register("categoryId")}><option value="">Sem categoria</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label>
        <fieldset className="space-y-2"><legend className="font-medium">Coleções</legend>{collections.map((collection) => <label key={collection.id} className="flex items-center gap-2"><input type="checkbox" checked={selectedCollections.includes(collection.id)} onChange={(event) => setValue("collectionIds", event.target.checked ? [...selectedCollections, collection.id] : selectedCollections.filter((id) => id !== collection.id))} />{collection.name}</label>)}</fieldset>
      </div>

      <fieldset className="space-y-3 rounded-lg border p-4"><legend className="px-1 font-semibold">Detalhes do produto</legend>
        {detailFields.map((field, index) => <div key={field.id} className="grid gap-2 sm:grid-cols-[1fr_2fr_auto]">
          <input aria-label="Título do detalhe" placeholder="Título" {...register(`details.${index}.title`)} />
          <input aria-label="Valor do detalhe" placeholder="Valor" {...register(`details.${index}.value`)} />
          <button type="button" onClick={() => remove(index)}>Remover</button>
        </div>)}
        <button type="button" onClick={() => append({ title: "", value: "" })}>+ Adicionar detalhe</button>
      </fieldset>

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
