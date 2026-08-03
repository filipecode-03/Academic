import type { Tool } from "./types";

interface Props {
    tool: Tool;
}

function ToolCard({ tool }: Props) {
    return (
        <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">

            <div className="flex flex-col gap-6 p-6 lg:flex-row">

                <div className="flex justify-center lg:block">
                    <div className="flex h-24 w-24 items-center justify-center rounded-xl border bg-white">
                        <img
                            src={tool.image}
                            alt={tool.title}
                            className="h-16 w-16 object-contain"
                        />
                    </div>
                </div>

                <div className="flex-1">

                    <h2 className="text-2xl font-bold text-gray-800">
                        {tool.title}
                    </h2>

                    <p className="mt-2 text-justify text-sm leading-6 text-gray-600">
                        {tool.description}
                    </p>

                    <span className="mt-4 inline-block rounded bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
                        {tool.category}
                    </span>

                </div>

                <div className="flex justify-center lg:w-72">
                    <img
                        src={tool.preview}
                        alt={`${tool.title} Preview`}
                        className="rounded-lg border object-cover"
                    />
                </div>

            </div>

            {tool.alternatives && tool.alternatives.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 border-t bg-gray-50 px-6 py-3 text-sm">

                    <span className="font-medium text-gray-700">
                        Alternativas:
                    </span>

                    {tool.alternatives.map((item) => (
                        <span
                            key={item}
                            className="rounded-full bg-white px-3 py-1 text-xs text-blue-600 shadow-sm"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            )}
        </article>
    );
}

export default ToolCard;