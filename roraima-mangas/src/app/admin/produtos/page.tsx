"use client";

import { useEffect, useState } from "react";

import ProductForm from "@/src/components/admin/products/product-form";

type ProductImage = {
  id: string;
  image: string;
  order: number;
};

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  status: "ACTIVE" | "INACTIVE" | "OUT_OF_STOCK";
  featured: boolean;
  isNew: boolean;
  images: ProductImage[];
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadProducts() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "/api/products"
      );

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

  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "Deseja realmente excluir este produto?"
    );

    if (!confirmed) {
      return;
    }

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
  }

  function handleProductCreated() {
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
          onClick={() =>
            setShowForm((current) => !current)
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
            Novo produto
          </h2>

          <ProductForm
            onSuccess={handleProductCreated}
          />
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold">
          Produtos cadastrados
        </h2>

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

        {!loading &&
          products.length > 0 && (
            <div className="space-y-4">
              {products.map((product) => (
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
                        R$ {product.price.toFixed(2)}
                      </p>

                      <p>
                        Status: {product.status}
                      </p>

                      <p>
                        {product.images.length}{" "}
                        imagem(ns)
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
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