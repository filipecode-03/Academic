import Skeleton from "@/src/components/ui/skeleton";

export default function StorefrontLoading() {
  return (
    <main className="mx-auto min-h-[50vh] max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8" aria-label="Carregando página">
      <Skeleton className="h-4 w-44" />
      <Skeleton className="h-9 w-64" />
      <div className="flex items-center justify-between rounded-lg border bg-white p-4"><Skeleton className="h-5 w-24" /><Skeleton className="h-9 w-44" /></div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">{[0, 1, 2, 3, 4, 5, 6, 7].map((item) => <Skeleton key={item} className="aspect-[3/4] rounded-xl" />)}</div>
    </main>
  );
}
