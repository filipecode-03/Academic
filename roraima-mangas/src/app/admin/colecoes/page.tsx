"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createCollectionSchema,
  type CreateCollectionInput,
} from "@/src/schemas/collection.schema";

type Collection = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
};

type Product = {
  id: string;
  name: string;
  slug: string;
};

type CollectionProduct = {
  product: Product;
};

type ApiResult = {
  message?: string;
  collections?: Collection[];
  products?: CollectionProduct[];
};

type CollectionFormProps = {
  collection?: Collection;
  onSave: (values: CreateCollectionInput, imageFile?: File) => Promise<void>;
  onCancel: () => void;
};

function CollectionForm({ collection, onSave, onCancel }: CollectionFormProps) {
  const [imageFile, setImageFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateCollectionInput>({
    resolver: zodResolver(createCollectionSchema),
    defaultValues: {
      name: collection?.name ?? "",
      description: collection?.description ?? "",
    },
  });

  useEffect(() => {
    if (!imageFile) {
      setPreviewUrl("");
      return;
    }

    const objectUrl = URL.createObjectURL(imageFile);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [imageFile]);

  return (
    <form
      className="space-y-4 border p-4"
      onSubmit={handleSubmit((values) => onSave(values, imageFile))}
    >
      <h2 className="text-xl font-semibold">
        {collection ? "Editar coleção" : "Nova coleção"}
      </h2>

      <div>
        <label className="block" htmlFor="collection-name">Nome</label>
        <input id="collection-name" className="w-full border p-2" {...register("name")} />
        {errors.name && <p role="alert">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block" htmlFor="collection-description">Descrição</label>
        <textarea
          id="collection-description"
          className="w-full border p-2"
          {...register("description")}
        />
        {errors.description && <p role="alert">{errors.description.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="block" htmlFor="collection-image">Imagem da coleção</label>
        {collection?.image && (
          <div>
            <p>Imagem atual:</p>
            <img
              src={collection.image}
              alt={`Imagem atual da coleção ${collection.name}`}
              className="h-32 w-32 object-cover"
            />
          </div>
        )}
        <input
          id="collection-image"
          className="block"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          onChange={(event) => setImageFile(event.target.files?.[0])}
        />
        <p className="text-sm text-neutral-600">Dimensão recomendada: 1600 × 600 px (proporção 8:3), para o banner responsivo da coleção. Formatos: JPG, PNG, WebP ou AVIF.</p>
        {previewUrl && (
          <div>
            <p>Prévia da nova imagem:</p>
            <img
              src={previewUrl}
              alt="Prévia da nova imagem da coleção"
              className="h-32 w-32 object-cover"
            />
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Salvando..." : "Salvar coleção"}
        </button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}

async function readApiResponse(response: Response): Promise<ApiResult> {
  const data = await response.json() as ApiResult;
  if (!response.ok) {
    throw new Error(data.message ?? "A operação não foi concluída.");
  }
  return data;
}

function getErrorMessage(cause: unknown, fallback: string) {
  if (!(cause instanceof Error)) return fallback;
  if (cause instanceof TypeError || cause.message.toLowerCase() === "failed to fetch") {
    return fallback;
  }
  return cause.message;
}

async function uploadCollectionImage(file: File) {
  let uploadResponse: Response;

  try {
    uploadResponse = await fetch("/api/uploads/image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fileName: file.name,
        contentType: file.type,
        folder: "collections",
      }),
    });
  } catch (cause) {
    console.error("Falha ao solicitar URL para imagem da coleção:", cause);
    throw new Error("Não foi possível preparar o envio da imagem.");
  }

  let uploadData: { message?: string; uploadUrl?: string; publicUrl?: string };
  try {
    uploadData = await uploadResponse.json();
  } catch (cause) {
    console.error("Resposta inválida ao preparar imagem da coleção:", cause);
    throw new Error("Não foi possível preparar o envio da imagem.");
  }

  if (!uploadResponse.ok) {
    throw new Error(uploadData.message ?? "Não foi possível preparar o envio da imagem.");
  }

  if (!uploadData.uploadUrl || !uploadData.publicUrl) {
    console.error("A API retornou dados incompletos para a imagem da coleção.");
    throw new Error("Não foi possível preparar o envio da imagem.");
  }

  let r2Response: Response;
  try {
    r2Response = await fetch(uploadData.uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": file.type },
      body: file,
    });
  } catch (cause) {
    // A URL assinada contém credenciais temporárias; não a inclua no log.
    console.error("Falha de rede/CORS no upload da imagem da coleção:", cause);
    throw new Error("Não foi possível enviar a imagem. Verifique a conexão e tente novamente.");
  }

  if (!r2Response.ok) {
    console.error(
      "O R2 recusou a imagem da coleção:",
      r2Response.status,
      r2Response.statusText
    );
    throw new Error("Não foi possível enviar a imagem. Verifique a conexão e tente novamente.");
  }

  return uploadData.publicUrl;
}

export default function CollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [editingCollection, setEditingCollection] = useState<Collection>();
  const [managingCollection, setManagingCollection] = useState<Collection>();
  const [associatedProducts, setAssociatedProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [savingAssociation, setSavingAssociation] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");

  async function loadCollections() {
    try {
      setLoading(true);
      setError("");
      const [collectionResponse, productResponse] = await Promise.all([
        fetch("/api/collections"),
        fetch("/api/products"),
      ]);
      const collectionData = await readApiResponse(collectionResponse);
      const productData = await readApiResponse(productResponse) as ApiResult & { products?: Product[] };
      setCollections(collectionData.collections ?? []);
      setProducts(productData.products ?? []);
    } catch (cause) {
      console.error("Erro ao carregar coleções e produtos:", cause);
      setError(getErrorMessage(cause, "Não foi possível carregar as coleções."));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadCollections();
  }, []);

  async function loadAssociatedProducts(collection: Collection) {
    try {
      setError("");
      const response = await fetch(`/api/collections/${collection.id}/products`);
      const data = await readApiResponse(response);
      setAssociatedProducts((data.products ?? []).map(({ product }) => product));
      setManagingCollection(collection);
      setSelectedProductId("");
    } catch (cause) {
      console.error("Erro ao carregar produtos da coleção:", cause);
      setError(getErrorMessage(cause, "Não foi possível carregar os produtos da coleção."));
    }
  }

  async function saveCollection(values: CreateCollectionInput, imageFile?: File) {
    try {
      setError("");
      const uploadedImageUrl = imageFile
        ? await uploadCollectionImage(imageFile)
        : editingCollection?.image ?? undefined;
      const response = await fetch(
        editingCollection ? `/api/collections/${editingCollection.id}` : "/api/collections",
        {
          method: editingCollection ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, image: uploadedImageUrl }),
        }
      );
      await readApiResponse(response);
      setShowForm(false);
      setEditingCollection(undefined);
      setNotice(editingCollection ? "Coleção atualizada com sucesso." : "Coleção criada com sucesso.");
      await loadCollections();
    } catch (cause) {
      console.error("Erro ao salvar coleção:", cause);
      setError(getErrorMessage(
        cause,
        editingCollection ? "Não foi possível atualizar a coleção." : "Não foi possível criar a coleção."
      ));
    }
  }

  async function deleteCollection(collection: Collection) {
    if (!window.confirm(`Deseja excluir a coleção “${collection.name}”?`)) return;
    try {
      setError("");
      setNotice("");
      await readApiResponse(await fetch(`/api/collections/${collection.id}`, { method: "DELETE" }));
      if (managingCollection?.id === collection.id) {
        setManagingCollection(undefined);
        setAssociatedProducts([]);
      }
      setNotice("Coleção excluída com sucesso.");
      await loadCollections();
    } catch (cause) {
      console.error("Erro ao excluir coleção:", cause);
      setError(getErrorMessage(cause, "Não foi possível excluir a coleção."));
    }
  }

  async function addProduct() {
    if (!managingCollection || !selectedProductId) return;
    try {
      setSavingAssociation(true);
      setError("");
      await readApiResponse(await fetch(`/api/collections/${managingCollection.id}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: selectedProductId }),
      }));
      await loadAssociatedProducts(managingCollection);
      setNotice("Produto adicionado à coleção.");
    } catch (cause) {
      console.error("Erro ao adicionar produto à coleção:", cause);
      setError(getErrorMessage(cause, "Não foi possível atualizar os produtos da coleção."));
    } finally {
      setSavingAssociation(false);
    }
  }

  async function removeProduct(product: Product) {
    if (!managingCollection) return;
    try {
      setError("");
      await readApiResponse(await fetch(
        `/api/collections/${managingCollection.id}/products/${product.id}`,
        { method: "DELETE" }
      ));
      setAssociatedProducts((current) => current.filter((item) => item.id !== product.id));
      setNotice("Produto removido da coleção.");
    } catch (cause) {
      console.error("Erro ao remover produto da coleção:", cause);
      setError(getErrorMessage(cause, "Não foi possível atualizar os produtos da coleção."));
    }
  }

  const availableProducts = products.filter(
    (product) => !associatedProducts.some((associated) => associated.id === product.id)
  );
  const normalizedSearch = search.trim().toLocaleLowerCase();
  const filteredCollections = collections.filter((collection) =>
    collection.name.toLocaleLowerCase().includes(normalizedSearch)
  );

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Coleções</h1>
          <p>Organize produtos em coleções para a loja.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            if (showForm) {
              setShowForm(false);
              return;
            }
            setEditingCollection(undefined);
            setError("");
            setNotice("");
            setShowForm(true);
          }}
        >
          {showForm ? "Fechar formulário" : "Nova coleção"}
        </button>
      </header>

      {error && <p role="alert">{error}</p>}
      {notice && <p role="status">{notice}</p>}

      {showForm && (
        <CollectionForm
          key={editingCollection?.id ?? "new"}
          collection={editingCollection}
          onSave={saveCollection}
          onCancel={() => setShowForm(false)}
        />
      )}

      {managingCollection && (
        <section className="space-y-4 border p-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold">Produtos: {managingCollection.name}</h2>
            <button type="button" onClick={() => setManagingCollection(undefined)}>Fechar</button>
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              aria-label="Produto para adicionar"
              value={selectedProductId}
              onChange={(event) => setSelectedProductId(event.target.value)}
            >
              <option value="">Selecione um produto</option>
              {availableProducts.map((product) => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))}
            </select>
            <button type="button" disabled={!selectedProductId || savingAssociation} onClick={() => void addProduct()}>
              {savingAssociation ? "Adicionando..." : "Adicionar produto"}
            </button>
          </div>
          {availableProducts.length === 0 && <p>Todos os produtos existentes já estão nesta coleção.</p>}
          {associatedProducts.length === 0 ? (
            <p>Nenhum produto associado a esta coleção.</p>
          ) : (
            <ul className="space-y-2">
              {associatedProducts.map((product) => (
                <li key={product.id} className="flex items-center justify-between border p-3">
                  <span>{product.name}</span>
                  <button type="button" onClick={() => void removeProduct(product)}>Remover</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Coleções cadastradas</h2>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="search"
            className="w-full max-w-md border p-2"
            placeholder="Pesquisar coleções..."
            aria-label="Pesquisar coleções pelo nome"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {search && <button type="button" onClick={() => setSearch("")}>Limpar pesquisa</button>}
        </div>
        {loading && <p>Carregando coleções...</p>}
        {!loading && collections.length === 0 && !error && <p>Nenhuma coleção cadastrada.</p>}
        {!loading && collections.length > 0 && filteredCollections.length === 0 && (
          <p>Nenhuma coleção encontrada para “{search}”.</p>
        )}
        {!loading && filteredCollections.map((collection) => (
          <article key={collection.id} className="flex flex-wrap items-center justify-between gap-3 border p-4">
            <div>
              <h3 className="font-semibold">{collection.name}</h3>
              {collection.description && <p>{collection.description}</p>}
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setEditingCollection(collection);
                  setError("");
                  setNotice("");
                  setShowForm(true);
                }}
              >Editar</button>
              <button type="button" onClick={() => void loadAssociatedProducts(collection)}>Gerenciar produtos</button>
              <button type="button" onClick={() => void deleteCollection(collection)}>Excluir</button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
