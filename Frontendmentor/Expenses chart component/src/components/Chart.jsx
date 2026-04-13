import { useEffect, useState } from "react";

export default function Chart() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data.length) return null;

  const max = Math.max(...data.map(d => d.amount));

  return (
    <div className="flex items-end gap-3 h-48 mt-6">
      {data.map((d, i) => {
        const max = Math.max(...data.map(d => d.amount));
        const min = Math.min(...data.map(d => d.amount));

        const minHeight = 10;

        const h = max === min
            ? 100
            : ((d.amount - min) / (max - min)) * (100 - minHeight) + minHeight;
        const isMax = d.amount === max;

        return (
          <div
            key={i}
            className="flex-1 flex flex-col justify-end items-center h-full"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Tooltip */}
            <span
              className={`mb-2 text-xs bg-[#382413] text-white p-2 rounded transition ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            >
              ${d.amount.toFixed(2)}
            </span>

            {/* Barra */}
            <div
              className={`w-full rounded-md transition cursor-pointer
                ${isMax ? "bg-[#76B5BC]" : "bg-[#ED745F]"}
                ${active === i && "opacity-70"}
              `}
              style={{ height: `${h}%` }}
            />

            {/* Label */}
            <span className="text-[14px] mt-2 text-gray-500">
              {d.day}
            </span>
          </div>
        );
      })}
    </div>
  );
}