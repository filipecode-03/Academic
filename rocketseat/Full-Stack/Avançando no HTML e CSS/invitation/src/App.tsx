function App() {
  return (
    <main className="relative min-h-screen bg-[#0F1113] p-8">

      {/* Fundo apenas da primeira tela */}
      <div
        className="
          absolute
          top-8
          left-1/2
          -translate-x-1/2
          h-[calc(100vh-4rem)]
          w-full
          max-w-7xl
          rounded-[32px]
          bg-[#131516]
        "
      />

      {/* Conteúdo */}
      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          grid-cols-[400px_1fr]
          gap-8
        "
      >
        {/* Sidebar */}
        <aside className="sticky top-8 h-[calc(100vh-4rem)]">
          <div className="h-full rounded-3xl bg-[#212427]" />
        </aside>

        {/* Formulário */}
        <section className="pt-8">
          <div className="rounded-3xl bg-[#212427] p-10">
            <div className="space-y-8">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="h-32 rounded-xl bg-red-800"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export