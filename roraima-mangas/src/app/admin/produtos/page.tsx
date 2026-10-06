"use client";

import { useEffect, useState } from "react";

import ProductForm, {
  type ProductFormInitialData,
} from "@/src/components/admin/products/product-form";

type ProductImage = {
  id: string;
  image: string;
  order: number;
};

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number | string;
  status: "ACTIVE" | "INACTIVE";
  stock: number;
  featured: boolean;
  isNew: boolean;
  images: ProductImage[];
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const [showForm, setShowForm] = useState(false);

  const [editingProduct, setEditingProduct] =
    useState<ProductFormInitialData | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  async function loadProducts() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/products");

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ??
            "Não foi possível carregar os produtos."
        );
      }

      setProducts(data.products);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Erro ao carregar produtos."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const normalizedSearch = search.trim().toLocaleLowerCase();
  const filteredProducts = products.filter((product) =>
    [product.name]
      .join(" ")
      .toLocaleLowerCase()
      .includes(normalizedSearch)
  );

  async function handleEdit(id: string) {
    try {
      setError("");

      const response = await fetch(
        `/api/products/${id}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ??
            "Não foi possível carregar o produto."
        );
      }

      setEditingProduct(data.product);
      setShowForm(true);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Não foi possível carregar o produto."
      );
    }
  }

  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "Deseja realmente excluir este produto?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `/api/products/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        window.alert(
          data.message ??
            "Não foi possível excluir o produto."
        );

        return;
      }

      await loadProducts();
    } catch {
      window.alert(
        "Não foi possível excluir o produto."
      );
    }
  }

  function handleNewProduct() {
    setEditingProduct(null);
    setShowForm(true);
  }

  function handleCancelForm() {
    setEditingProduct(null);
    setShowForm(false);
  }

  function handleProductSaved() {
    setEditingProduct(null);
    setShowForm(false);
    loadProducts();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Produtos
          </h1>

          <p>
            Gerencie os produtos da loja.
          </p>
        </div>

        <button
          type="button"
          onClick={
            showForm
              ? handleCancelForm
              : handleNewProduct
          }
        >
          {showForm
            ? "Cancelar"
            : "Novo produto"}
        </button>
      </div>

      {showForm && (
        <section>
          <h2 className="text-xl font-semibold">
            {editingProduct
              ? "Editar produto"
              : "Novo produto"}
          </h2>

          <ProductForm
            product={editingProduct ?? undefined}
            onSuccess={handleProductSaved}
          />
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold">
          Produtos cadastrados
        </h2>

        <div className="flex flex-wrap items-center gap-2">
          <input
            type="search"
            className="w-full max-w-md border p-2"
            placeholder="Pesquisar produtos..."
            aria-label="Pesquisar produtos por nome, slug ou SKU"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {search && <button type="button" onClick={() => setSearch("")}>Limpar pesquisa</button>}
        </div>

        {loading && (
          <p>Carregando produtos...</p>
        )}

        {error && (
          <p>{error}</p>
        )}

        {!loading &&
          !error &&
          products.length === 0 && (
            <p>
              Nenhum produto cadastrado.
            </p>
          )}

        {!loading && !error && products.length > 0 && filteredProducts.length === 0 && (
          <p>Nenhum produto encontrado para “{search}”.</p>
        )}

        {!loading &&
          filteredProducts.length > 0 && (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="border p-4"
                >
                  <div className="flex gap-4">
                    {product.images[0] && (
                      <img
                        src={product.images[0].image}
                        alt={product.name}
                        className="w-24 h-24 object-cover"
                      />
                    )}

                    <div>
                      <h3 className="font-semibold">
                        {product.name}
                      </h3>

                      <p>
                        R${" "}
                        {Number(product.price).toFixed(2)}
                      </p>

                      <p>
                        Status: {product.status}
                      </p>
                      <p>Estoque: {product.stock}</p>

                      <p>
                        {product.images.length}{" "}
                        imagem(ns)
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        handleEdit(product.id)
                      }
                    >
                      Editar
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(product.id)
                      }
                    >
                      Excluir
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
      </section>
    </div>
  );
}
