"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import { Plus, X } from "lucide-react";
import { Button } from "@/src/components/ui/button";
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
  const [collections, setCollections] = useState<{ id: string; name: string }[]>([]);
  const [createCollectionOpen, setCreateCollectionOpen] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState("");
  const [collectionError, setCollectionError] = useState("");
  const [creatingCollection, setCreatingCollection] = useState(false);

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
    void fetch("/api/collections").then(async (collectionResponse) => {
      if (!collectionResponse.ok) throw new Error("Não foi possível carregar coleções.");
      const collectionData = await collectionResponse.json();
      setCollections(collectionData.collections ?? []);
    }).catch((error) => console.error("Não foi possível carregar coleções do formulário:", error));
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

  async function createCollectionFromProduct() {
    const collectionName = newCollectionName.trim();
    if (!collectionName) { setCollectionError("Informe o nome da coleção."); return; }
    try {
      setCreatingCollection(true); setCollectionError("");
      const response = await fetch("/api/collections", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: collectionName }) });
      const result = await response.json() as { message?: string; collection?: { id: string; name: string } };
      if (!response.ok || !result.collection) throw new Error(result.message ?? "Não foi possível criar a coleção.");
      setCollections((current) => [...current, result.collection!]);
      setValue("collectionIds", [...selectedCollections, result.collection.id], { shouldDirty: true, shouldValidate: true });
      setNewCollectionName(""); setCreateCollectionOpen(false);
    } catch (cause) { setCollectionError(cause instanceof Error ? cause.message : "Não foi possível criar a coleção."); }
    finally { setCreatingCollection(false); }
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

      <fieldset className="space-y-3"><legend className="font-medium">Coleções</legend><div className="flex flex-wrap gap-2"><select aria-label="Selecionar coleção" className="min-w-56" value="" onChange={(event) => { const id = event.target.value; if (id && !selectedCollections.includes(id)) setValue("collectionIds", [...selectedCollections, id], { shouldDirty: true }); }}><option value="">Selecionar coleção…</option>{collections.filter((collection) => !selectedCollections.includes(collection.id)).map((collection) => <option key={collection.id} value={collection.id}>{collection.name}</option>)}</select><Button type="button" variant="outline" onClick={() => { setCollectionError(""); setCreateCollectionOpen(true); }}><Plus className="mr-1 size-4" />Criar coleção</Button></div>{selectedCollections.length > 0 && <div className="flex flex-wrap gap-2">{collections.filter((collection) => selectedCollections.includes(collection.id)).map((collection) => <span key={collection.id} className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-sm">{collection.name}<button type="button" aria-label={`Remover ${collection.name}`} onClick={() => setValue("collectionIds", selectedCollections.filter((id) => id !== collection.id), { shouldDirty: true })}><X className="size-3.5" /></button></span>)}</div>}</fieldset>

      {createCollectionOpen && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget && !creatingCollection) setCreateCollectionOpen(false); }}><section role="dialog" aria-modal="true" aria-labelledby="quick-collection-title" className="w-full max-w-md rounded-xl border bg-white p-5 shadow-2xl"><h2 id="quick-collection-title" className="text-lg font-semibold">Criar coleção</h2><p className="mt-1 text-sm text-neutral-600">A coleção será adicionada a este produto e você continuará preenchendo o formulário.</p><label className="mt-4 block space-y-1 text-sm font-medium">Nome<input autoFocus className="w-full" value={newCollectionName} onChange={(event) => setNewCollectionName(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); void createCollectionFromProduct(); } }} /></label>{collectionError && <p role="alert" className="mt-2 text-sm text-red-700">{collectionError}</p>}<div className="mt-5 flex justify-end gap-2"><Button type="button" variant="outline" disabled={creatingCollection} onClick={() => setCreateCollectionOpen(false)}>Cancelar</Button><Button type="button" disabled={creatingCollection} onClick={() => void createCollectionFromProduct()}>{creatingCollection ? "Criando…" : "Criar e selecionar"}</Button></div></section></div>}

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
        <p className="text-sm text-neutral-600">Dimensão recomendada: 1000 × 1250 px (proporção 4:5), para capa principal e imagens adicionais. Formatos: JPG, PNG, WebP ou AVIF.</p>

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
