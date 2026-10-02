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
  onSave: (values: CreateCollectionInput) => Promise<void>;
  onCancel: () => void;
};

function CollectionForm({ collection, onSave, onCancel }: CollectionFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateCollectionInput>({
    resolver: zodResolver(createCollectionSchema),
    defaultValues: {
      name: collection?.name ?? "",
      slug: collection?.slug ?? "",
      description: collection?.description ?? "",
      image: collection?.image ?? "",
    },
  });

  return (
    <form className="space-y-4 border p-4" onSubmit={handleSubmit(onSave)}>
      <h2 className="text-xl font-semibold">
        {collection ? "Editar coleção" : "Nova coleção"}
      </h2>

      <div>
        <label className="block" htmlFor="collection-name">Nome</label>
        <input id="collection-name" className="w-full border p-2" {...register("name")} />
        {errors.name && <p role="alert">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block" htmlFor="collection-slug">Slug</label>
        <input id="collection-slug" className="w-full border p-2" {...register("slug")} />
        {errors.slug && <p role="alert">{errors.slug.message}</p>}
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

      <div>
        <label className="block" htmlFor="collection-image">URL da imagem</label>
        <input
          id="collection-image"
          className="w-full border p-2"
          type="url"
          {...register("image")}
        />
        {errors.image && <p role="alert">{errors.image.message}</p>}
      </div>

      <div className="flex gap-3">
        <button type="submit" disabled={isSubmitting}>
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

  async function saveCollection(values: CreateCollectionInput) {
    try {
      setError("");
      const response = await fetch(
        editingCollection ? `/api/collections/${editingCollection.id}` : "/api/collections",
        {
          method: editingCollection ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
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
                  <span>{product.name} <span className="text-sm">({product.slug})</span></span>
                  <button type="button" onClick={() => void removeProduct(product)}>Remover</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Coleções cadastradas</h2>
        {loading && <p>Carregando coleções...</p>}
        {!loading && collections.length === 0 && !error && <p>Nenhuma coleção cadastrada.</p>}
        {!loading && collections.map((collection) => (
          <article key={collection.id} className="flex flex-wrap items-center justify-between gap-3 border p-4">
            <div>
              <h3 className="font-semibold">{collection.name}</h3>
              <p className="text-sm">Slug: {collection.slug}</p>
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
