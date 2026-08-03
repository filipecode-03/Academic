
function Cards() {
    return (
        <section className="mx-auto flex max-w-7xl flex-col gap-8">
            {tools.map((tool) => (
                <ToolCard
                    key={tool.id}
                    tool={tool}
                />
            ))}
        </section>
    );
}

export default Cards;