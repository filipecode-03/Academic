function App() {
  return (
    <main className="bg-zinc-950">
      <div className="mx-auto bg-[#131516] flex max-w-7xl px-8 py-8">

        {/* Sidebar */}
        <aside
          className="
            fixed
            top-8
            w-[400px]
            h-[calc(100vh-4rem)]
          "
        >
          <div className="h-full rounded-3xl bg-zinc-900">
            {/* imagem */}
          </div>
        </aside>

        {/* Form */}
        <section
          className="
            ml-[432px]
            flex-1
          "
        >
          <div className="rounded-3xl bg-zinc-900 px-16 py-10">

            <div className="space-y-8">
              <div className="h-32 rounded bg-zinc-800" />
              <div className="h-32 rounded bg-zinc-800" />
              <div className="h-32 rounded bg-zinc-800" />
              <div className="h-32 rounded bg-zinc-800" />
              <div className="h-32 rounded bg-zinc-800" />
              <div className="h-32 rounded bg-zinc-800" />
              <div className="h-32 rounded bg-zinc-800" />
              <div className="h-32 rounded bg-zinc-800" />
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}

export default App;