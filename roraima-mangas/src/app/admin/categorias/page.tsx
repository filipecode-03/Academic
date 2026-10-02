"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createCategorySchema,
  type CreateCategoryInput,
} from "@/src/schemas/category.schema";

type Category = {
  id: string;
  name: string;
  slug: string;
};

type CategoryFormProps = {
  category?: Category;
  onSave: (values: CreateCategoryInput) => Promise<void>;
  onCancel: () => void;
};

function CategoryForm({ category, onSave, onCancel }: CategoryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateCategoryInput>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      name: category?.name ?? "",
      slug: category?.slug ?? "",
    },
  });

  return (
    <form
      className="space-y-4 border p-4"
      onSubmit={handleSubmit(onSave)}
    >
      <h2 className="text-xl font-semibold">
        {category ? "Editar categoria" : "Nova categoria"}
      </h2>

      <div>
        <label className="block" htmlFor="category-name">Nome</label>
        <input
          id="category-name"
          className="w-full border p-2"
          {...register("name")}
        />
        {errors.name && <p role="alert">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block" htmlFor="category-slug">Slug</label>
        <input
          id="category-slug"
          className="w-full border p-2"
          {...register("slug")}
        />
        {errors.slug && <p role="alert">{errors.slug.message}</p>}
      </div>

      <div className="flex gap-3">
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Salvar"}
        </button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

async function readResponse(response: Response) {
  const data: {
    message?: string;
    categories?: Category[];
    category?: Category;
  } = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "A operação não foi concluída.");
  }

  return data;
}

function getErrorMessage(cause: unknown, fallback: string) {
  if (!(cause instanceof Error)) {
    return fallback;
  }

  if (
    cause instanceof TypeError ||
    cause.message.toLowerCase() === "failed to fetch"
  ) {
    return fallback;
  }

  return cause.message;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategory, setEditingCategory] = useState<Category>();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function loadCategories() {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/categories");
      const data = await readResponse(response);
      setCategories(data.categories ?? []);
    } catch (cause) {
      console.error("Erro ao carregar categorias:", cause);
      setError(
        getErrorMessage(cause, "Não foi possível carregar as categorias.")
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadCategories();
  }, []);

  function startCreate() {
    setEditingCategory(undefined);
    setNotice("");
    setError("");
    setShowForm(true);
  }

  function startEdit(category: Category) {
    setEditingCategory(category);
    setNotice("");
    setError("");
    setShowForm(true);
  }

  async function saveCategory(values: CreateCategoryInput) {
    try {
      setError("");
      const response = await fetch(
        editingCategory
          ? `/api/categories/${editingCategory.id}`
          : "/api/categories",
        {
          method: editingCategory ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      await readResponse(response);
      setShowForm(false);
      setEditingCategory(undefined);
      setNotice(
        editingCategory
          ? "Categoria atualizada com sucesso."
          : "Categoria criada com sucesso."
      );
      await loadCategories();
    } catch (cause) {
      console.error("Erro ao salvar categoria:", cause);
      setError(
        getErrorMessage(
          cause,
          editingCategory
            ? "Não foi possível atualizar a categoria."
            : "Não foi possível criar a categoria."
        )
      );
    }
  }

  async function deleteCategory(category: Category) {
    if (!window.confirm(`Deseja excluir a categoria “${category.name}”?`)) {
      return;
    }

    try {
      setError("");
      setNotice("");
      const response = await fetch(`/api/categories/${category.id}`, {
        method: "DELETE",
      });
      await readResponse(response);
      setNotice("Categoria excluída com sucesso.");
      await loadCategories();
    } catch (cause) {
      console.error("Erro ao excluir categoria:", cause);
      setError(
        getErrorMessage(cause, "Não foi possível excluir a categoria.")
      );
    }
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Categorias</h1>
          <p>Gerencie as categorias da loja.</p>
        </div>
        <button
          type="button"
          onClick={showForm ? () => setShowForm(false) : startCreate}
        >
          {showForm ? "Fechar formulário" : "Nova categoria"}
        </button>
      </header>

      {error && <p role="alert">{error}</p>}
      {notice && <p role="status">{notice}</p>}

      {showForm && (
        <CategoryForm
          key={editingCategory?.id ?? "new"}
          category={editingCategory}
          onSave={saveCategory}
          onCancel={() => setShowForm(false)}
        />
      )}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Categorias cadastradas</h2>
        {loading && <p>Carregando categorias...</p>}
        {!loading && categories.length === 0 && !error && (
          <p>Nenhuma categoria cadastrada.</p>
        )}
        {!loading && categories.map((category) => (
          <article
            key={category.id}
            className="flex flex-wrap items-center justify-between gap-3 border p-4"
          >
            <div>
              <h3 className="font-semibold">{category.name}</h3>
              <p className="text-sm">Slug: {category.slug}</p>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => startEdit(category)}>
                Editar
              </button>
              <button type="button" onClick={() => void deleteCategory(category)}>
                Excluir
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
