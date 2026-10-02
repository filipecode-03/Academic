"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createHomeBannerSchema } from "@/src/schemas/home-banner.schema";

type DestinationType = "NONE" | "PRODUCT" | "CATEGORY" | "COLLECTION";
type BannerPosition = "FIRST" | "LAST";
type BannerFormData = z.infer<typeof createHomeBannerSchema>;

type DestinationOption = { id: string; name: string };
type Banner = {
  id: string;
  title: string;
  description: string | null;
  image: string;
  order: number;
  active: boolean;
  destinationType: DestinationType;
  productId: string | null;
  categoryId: string | null;
  collectionId: string | null;
  product: DestinationOption | null;
  category: DestinationOption | null;
  collection: DestinationOption | null;
};

type BannerFormProps = {
  banner?: Banner;
  products: DestinationOption[];
  categories: DestinationOption[];
  collections: DestinationOption[];
  canChoosePosition: boolean;
  currentPosition?: number;
  onSave: (values: BannerFormData, imageFile?: File, position?: BannerPosition) => Promise<void>;
  onCancel: () => void;
};

type ApiError = { error?: string; message?: string };

function BannerForm({
  banner,
  products,
  categories,
  collections,
  canChoosePosition,
  currentPosition,
  onSave,
  onCancel,
}: BannerFormProps) {
  const [imageFile, setImageFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState("");
  const [position, setPosition] = useState<BannerPosition | "KEEP">(banner ? "KEEP" : "LAST");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<z.input<typeof createHomeBannerSchema>, unknown, BannerFormData>({
    resolver: zodResolver(createHomeBannerSchema),
    defaultValues: {
      title: banner?.title ?? "",
      description: banner?.description ?? "",
      image: banner?.image ?? "",
      active: banner?.active ?? true,
      destinationType: banner?.destinationType ?? "NONE",
      productId: banner?.productId ?? null,
      categoryId: banner?.categoryId ?? null,
      collectionId: banner?.collectionId ?? null,
    },
  });

  const destinationType = watch("destinationType");

  useEffect(() => {
    if (!imageFile) {
      setPreviewUrl("");
      return;
    }

    const objectUrl = URL.createObjectURL(imageFile);
    setPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [imageFile]);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setImageFile(file);
    setValue("image", file ? `upload-pending:${file.name}` : banner?.image ?? "", {
      shouldValidate: true,
      shouldDirty: true,
    });
  }

  function handleDestinationChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextType = event.target.value as DestinationType;
    setValue("destinationType", nextType, { shouldValidate: true });
    setValue("productId", null, { shouldValidate: true });
    setValue("categoryId", null, { shouldValidate: true });
    setValue("collectionId", null, { shouldValidate: true });
  }

  return (
    <form
      className="space-y-4 border p-4"
      onSubmit={handleSubmit((values) =>
        onSave(values, imageFile, position === "KEEP" ? undefined : position)
      )}
    >
      <h2 className="text-xl font-semibold">{banner ? "Editar banner" : "Novo banner"}</h2>

      <div>
        <label className="block" htmlFor="banner-title">Título *</label>
        <input
          id="banner-title"
          className="w-full border p-2"
          {...register("title")}
        />
        {errors.title && <p role="alert">{errors.title.message}</p>}
        <p className="text-sm">Identificação administrativa, não exibida na Home.</p>
      </div>

      <div>
        <label className="block" htmlFor="banner-description">Descrição</label>
        <textarea
          id="banner-description"
          className="w-full border p-2"
          {...register("description")}
        />
        {errors.description && <p role="alert">{errors.description.message}</p>}
        <p className="text-sm">Informação administrativa opcional.</p>
      </div>

      <div>
        <label className="block" htmlFor="banner-image">Imagem do banner</label>
        {banner?.image && (
          <div className="my-2">
            <p>Imagem atual:</p>
            <img src={banner.image} alt="Imagem atual do banner" className="h-32 w-auto object-cover" />
          </div>
        )}
        <input
          id="banner-image"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          onChange={handleImageChange}
        />
        <input type="hidden" {...register("image")} />
        {previewUrl && (
          <div className="my-2">
            <p>Prévia da nova imagem:</p>
            <img src={previewUrl} alt="Prévia da nova imagem do banner" className="h-32 w-auto object-cover" />
          </div>
        )}
        {errors.image && <p role="alert">{errors.image.message}</p>}
      </div>

      {canChoosePosition && (
        <div>
          <label className="block" htmlFor="banner-position">Posição</label>
          {banner && <p>Posição atual: {(currentPosition ?? 0) + 1}</p>}
          <select
            id="banner-position"
            value={position}
            onChange={(event) => setPosition(event.target.value as BannerPosition | "KEEP")}
          >
            {banner && <option value="KEEP">Manter posição atual</option>}
            <option value="FIRST">Adicionar no início</option>
            <option value="LAST">Adicionar no final</option>
          </select>
        </div>
      )}

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("active")} />
        Banner ativo
      </label>

      <div>
        <label className="block" htmlFor="banner-destination">Destino</label>
        <select
          id="banner-destination"
          {...register("destinationType", { onChange: handleDestinationChange })}
        >
          <option value="NONE">Sem destino</option>
          <option value="PRODUCT">Produto</option>
          <option value="CATEGORY">Categoria</option>
          <option value="COLLECTION">Coleção</option>
        </select>
        {errors.destinationType && <p role="alert">{errors.destinationType.message}</p>}
      </div>

      {destinationType === "PRODUCT" && (
        <div>
          <label className="block" htmlFor="banner-product">Produto</label>
          <select id="banner-product" {...register("productId")}>
            <option value="">Selecione um produto</option>
            {products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
          </select>
          {errors.productId && <p role="alert">{errors.productId.message}</p>}
        </div>
      )}

      {destinationType === "CATEGORY" && (
        <div>
          <label className="block" htmlFor="banner-category">Categoria</label>
          <select id="banner-category" {...register("categoryId")}>
            <option value="">Selecione uma categoria</option>
            {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
          </select>
          {errors.categoryId && <p role="alert">{errors.categoryId.message}</p>}
        </div>
      )}

      {destinationType === "COLLECTION" && (
        <div>
          <label className="block" htmlFor="banner-collection">Coleção</label>
          <select id="banner-collection" {...register("collectionId")}>
            <option value="">Selecione uma coleção</option>
            {collections.map((collection) => <option key={collection.id} value={collection.id}>{collection.name}</option>)}
          </select>
          {errors.collectionId && <p role="alert">{errors.collectionId.message}</p>}
        </div>
      )}

      <div className="flex gap-3">
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Salvando..." : "Salvar banner"}</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}

async function readJson<T>(response: Response): Promise<T> {
  const data = await response.json() as T & ApiError;
  if (!response.ok) {
    throw new Error(data.message ?? data.error ?? "A operação não foi concluída.");
  }
  return data;
}

function getErrorMessage(cause: unknown, fallback: string) {
  if (!(cause instanceof Error)) return fallback;
  if (cause instanceof TypeError || cause.message.toLowerCase() === "failed to fetch") return fallback;
  return cause.message;
}

async function uploadBannerImage(file: File) {
  let response: Response;
  try {
    response = await fetch("/api/uploads/image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileName: file.name, contentType: file.type, folder: "banners" }),
    });
  } catch (cause) {
    console.error("Falha ao solicitar URL de upload do banner:", cause);
    throw new Error("Não foi possível preparar o envio da imagem.");
  }

  const data = await readJson<{ uploadUrl?: string; publicUrl?: string }>(response);
  if (!data.uploadUrl || !data.publicUrl) {
    console.error("A API retornou dados incompletos para o upload do banner.");
    throw new Error("Não foi possível preparar o envio da imagem.");
  }

  let uploadResponse: Response;
  try {
    uploadResponse = await fetch(data.uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": file.type },
      body: file,
    });
  } catch (cause) {
    // A URL assinada contém credenciais temporárias; não a inclua no log.
    console.error("Falha de rede/CORS no upload do banner para R2:", cause);
    throw new Error("Não foi possível enviar a imagem. Verifique a conexão e tente novamente.");
  }

  if (!uploadResponse.ok) {
    console.error("R2 recusou o upload do banner:", uploadResponse.status, uploadResponse.statusText);
    throw new Error("Não foi possível enviar a imagem. Verifique a conexão e tente novamente.");
  }
  return data.publicUrl;
}

function getBannerDestination(banner: Banner) {
  switch (banner.destinationType) {
    case "PRODUCT": return `Produto: ${banner.product?.name ?? "não encontrado"}`;
    case "CATEGORY": return `Categoria: ${banner.category?.name ?? "não encontrada"}`;
    case "COLLECTION": return `Coleção: ${banner.collection?.name ?? "não encontrada"}`;
    default: return "Sem destino";
  }
}

export default function BannersPage() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [products, setProducts] = useState<DestinationOption[]>([]);
  const [categories, setCategories] = useState<DestinationOption[]>([]);
  const [collections, setCollections] = useState<DestinationOption[]>([]);
  const [editingBanner, setEditingBanner] = useState<Banner>();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderedBannerIds, setOrderedBannerIds] = useState<string[]>([]);
  const [isSavingOrder, setIsSavingOrder] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function loadPageData() {
    try {
      setLoading(true);
      setError("");
      const [bannerResponse, productResponse, categoryResponse, collectionResponse] = await Promise.all([
        fetch("/api/banners"),
        fetch("/api/products"),
        fetch("/api/categories"),
        fetch("/api/collections"),
      ]);
      const [bannerData, productData, categoryData, collectionData] = await Promise.all([
        readJson<Banner[]>(bannerResponse),
        readJson<{ products: DestinationOption[] }>(productResponse),
        readJson<{ categories: DestinationOption[] }>(categoryResponse),
        readJson<{ collections: DestinationOption[] }>(collectionResponse),
      ]);
      setBanners(bannerData);
      setProducts(productData.products);
      setCategories(categoryData.categories);
      setCollections(collectionData.collections);
    } catch (cause) {
      console.error("Erro ao carregar dados dos banners:", cause);
      setError(getErrorMessage(cause, "Não foi possível carregar os banners."));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void loadPageData(); }, []);

  const orderedBanners = isOrdering
    ? orderedBannerIds
        .map((id) => banners.find((banner) => banner.id === id))
        .filter((banner): banner is Banner => Boolean(banner))
    : banners;
  const normalizedSearch = search.trim().toLocaleLowerCase();
  const visibleBanners = orderedBanners.filter((banner) =>
    [banner.title, banner.description ?? "", getBannerDestination(banner)]
      .join(" ")
      .toLocaleLowerCase()
      .includes(normalizedSearch)
  );

  function startOrdering() {
    setOrderedBannerIds(banners.map((banner) => banner.id));
    setIsOrdering(true);
    setShowForm(false);
    setEditingBanner(undefined);
    setError("");
    setNotice("");
  }

  function cancelOrdering() {
    setOrderedBannerIds([]);
    setIsOrdering(false);
    setError("");
  }

  function moveBanner(bannerId: string, direction: -1 | 1) {
    setOrderedBannerIds((current) => {
      const from = current.indexOf(bannerId);
      const to = from + direction;
      if (from < 0 || to < 0 || to >= current.length) return current;
      const next = [...current];
      [next[from], next[to]] = [next[to], next[from]];
      return next;
    });
  }

  async function saveBannerOrder() {
    try {
      setIsSavingOrder(true);
      setError("");
      await readJson(await fetch("/api/banners/order", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bannerIds: orderedBannerIds }),
      }));
      setIsOrdering(false);
      setOrderedBannerIds([]);
      setNotice("Ordem dos banners atualizada.");
      await loadPageData();
    } catch (cause) {
      console.error("Erro ao salvar a ordem dos banners:", cause);
      setError(getErrorMessage(cause, "Não foi possível salvar a ordem dos banners."));
    } finally {
      setIsSavingOrder(false);
    }
  }

  async function saveBanner(
    values: BannerFormData,
    imageFile?: File,
    position?: BannerPosition,
  ) {
    try {
      setError("");
      const image = imageFile ? await uploadBannerImage(imageFile) : editingBanner?.image;
      const payload = {
        ...values,
        ...(position && { position }),
        image: image ?? values.image,
        productId: values.destinationType === "PRODUCT" ? values.productId : null,
        categoryId: values.destinationType === "CATEGORY" ? values.categoryId : null,
        collectionId: values.destinationType === "COLLECTION" ? values.collectionId : null,
      };
      const response = await fetch(
        editingBanner ? `/api/banners/${editingBanner.id}` : "/api/banners",
        {
          method: editingBanner ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      await readJson<Banner>(response);
      setShowForm(false);
      setEditingBanner(undefined);
      setNotice(editingBanner ? "Banner atualizado com sucesso." : "Banner criado com sucesso.");
      await loadPageData();
    } catch (cause) {
      console.error("Erro ao salvar banner:", cause);
      setError(getErrorMessage(
        cause,
        editingBanner ? "Não foi possível atualizar o banner." : "Não foi possível criar o banner."
      ));
    }
  }

  async function toggleActive(banner: Banner) {
    try {
      setError("");
      await readJson<Banner>(await fetch(`/api/banners/${banner.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !banner.active }),
      }));
      setNotice(`Banner ${banner.active ? "desativado" : "ativado"}.`);
      await loadPageData();
    } catch (cause) {
      console.error("Erro ao alterar status do banner:", cause);
      setError(getErrorMessage(cause, "Não foi possível atualizar o banner."));
    }
  }

  async function deleteBanner(banner: Banner) {
    if (!window.confirm("Deseja excluir este banner?")) return;
    try {
      setError("");
      setNotice("");
      await readJson<{ message?: string }>(await fetch(`/api/banners/${banner.id}`, { method: "DELETE" }));
      setNotice("Banner excluído com sucesso.");
      await loadPageData();
    } catch (cause) {
      console.error("Erro ao excluir banner:", cause);
      setError(getErrorMessage(cause, "Não foi possível excluir o banner."));
    }
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Banners</h1>
          <p>Gerencie os banners exibidos na Home.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {!isOrdering && (
            <button
              type="button"
              onClick={() => {
                if (showForm) {
                  setShowForm(false);
                  return;
                }
                setEditingBanner(undefined);
                setNotice("");
                setError("");
                setShowForm(true);
              }}
            >
              {showForm ? "Fechar formulário" : "Novo banner"}
            </button>
          )}
          {!isOrdering ? (
            <button type="button" disabled={banners.length < 2} onClick={startOrdering}>
              Alterar ordem
            </button>
          ) : (
            <>
              <button type="button" onClick={cancelOrdering}>Cancelar</button>
              <button type="button" disabled={isSavingOrder} onClick={() => void saveBannerOrder()}>
                {isSavingOrder ? "Salvando ordem..." : "Concluir alteração"}
              </button>
            </>
          )}
        </div>
      </header>

      <div className="flex flex-wrap items-center gap-2">
        <input
          type="search"
          className="w-full max-w-md border p-2"
          placeholder="Pesquisar banners..."
          aria-label="Pesquisar banners por título, descrição ou destino"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {search && <button type="button" onClick={() => setSearch("")}>Limpar pesquisa</button>}
      </div>

      {error && <p role="alert">{error}</p>}
      {notice && <p role="status">{notice}</p>}
      {showForm && (
        <BannerForm
          key={editingBanner?.id ?? "new"}
          banner={editingBanner}
          products={products}
          categories={categories}
          collections={collections}
          canChoosePosition={Boolean(editingBanner) || banners.length > 0}
          currentPosition={editingBanner?.order}
          onSave={saveBanner}
          onCancel={() => setShowForm(false)}
        />
      )}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Banners cadastrados</h2>
        {loading && <p>Carregando banners...</p>}
        {!loading && banners.length === 0 && !error && <p>Nenhum banner cadastrado.</p>}
        {!loading && banners.length > 0 && visibleBanners.length === 0 && (
          <p>Nenhum banner encontrado para “{search}”.</p>
        )}
        {!loading && visibleBanners.map((banner) => (
          <article key={banner.id} className="flex flex-wrap items-center justify-between gap-4 border p-4">
            <div className="flex items-center gap-4">
              <img src={banner.image} alt="Banner" className="h-24 w-40 object-cover" />
              <div>
                <h3 className="font-semibold">{banner.title}</h3>
                {banner.description && <p className="max-w-xl truncate">{banner.description}</p>}
                <p>Posição: {(isOrdering ? orderedBannerIds.indexOf(banner.id) : banner.order) + 1}</p>
                <p>Status: {banner.active ? "Ativo" : "Inativo"}</p>
                <p>Destino: {getBannerDestination(banner)}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {isOrdering ? (
                <div className="flex gap-2" aria-label={`Mover ${banner.title}`}>
                  <button
                    type="button"
                    aria-label={`Mover ${banner.title} para cima`}
                    disabled={orderedBannerIds.indexOf(banner.id) === 0}
                    onClick={() => moveBanner(banner.id, -1)}
                  >↑</button>
                  <button
                    type="button"
                    aria-label={`Mover ${banner.title} para baixo`}
                    disabled={orderedBannerIds.indexOf(banner.id) === orderedBannerIds.length - 1}
                    onClick={() => moveBanner(banner.id, 1)}
                  >↓</button>
                </div>
              ) : (
                <>
                  <button type="button" onClick={() => { setEditingBanner(banner); setError(""); setNotice(""); setShowForm(true); }}>Editar</button>
                  <button type="button" onClick={() => void toggleActive(banner)}>{banner.active ? "Desativar" : "Ativar"}</button>
                  <button type="button" onClick={() => void deleteBanner(banner)}>Excluir</button>
                </>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
