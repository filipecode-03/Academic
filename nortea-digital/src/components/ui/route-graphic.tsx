"use client";

import { useRef } from "react";

export function RouteGraphic() {
  const graphicRef = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<DOMRect | null>(null);

  function cacheBounds(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "touch") {
      boundsRef.current = event.currentTarget.getBoundingClientRect();
    }
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const box = boundsRef.current;
    if (!box) return;
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    graphicRef.current?.style.setProperty("--route-x", `${x * 12}px`);
    graphicRef.current?.style.setProperty("--route-y", `${y * 12}px`);
  }

  function resetPointer() {
    graphicRef.current?.style.setProperty("--route-x", "0px");
    graphicRef.current?.style.setProperty("--route-y", "0px");
  }

  return (
    <div
      ref={graphicRef}
      onPointerEnter={cacheBounds}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative aspect-[5/4] w-full overflow-hidden border border-natural/20 bg-natural/[0.035] transition-[transform] duration-500 ease-out"
      style={{
        transform:
          "translate3d(var(--route-x, 0px), var(--route-y, 0px), 0)",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 720 600"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <g stroke="currentColor" className="text-mist/15">
          <path d="M-80 450C78 297 130 96 343 91c221-5 252 214 462 222" />
          <path d="M-60 490C112 328 143 132 350 125c204-8 249 203 430 221" />
          <path d="M-20 535c149-149 203-343 377-353 190-11 248 177 381 205" />
          <path d="M53 594c82-126 184-315 310-332 164-23 233 129 320 167" />
        </g>
        <path
          d="M74 462C171 421 125 280 242 274c121-7 87 128 201 118 96-9 56-154 159-188"
          stroke="currentColor"
          className="route-dash text-natural"
          strokeWidth="2"
        />
        <g fill="currentColor" className="text-natural">
          <g className="route-node"><circle cx="74" cy="462" r="6" /></g>
          <g className="route-node" style={{ animationDelay: "1.2s" }}><circle cx="242" cy="274" r="6" /></g>
          <g className="route-node" style={{ animationDelay: "2.4s" }}><circle cx="443" cy="392" r="6" /></g>
        </g>
        <g className="font-display text-[13px] tracking-[0.12em] text-mist" fill="currentColor">
          <text x="52" y="492">02°49&apos;N</text>
          <text x="216" y="247">DIREÇÃO</text>
          <text x="470" y="383">AVANÇO</text>
        </g>
        <path d="m587 194 28-3-12 26" stroke="currentColor" className="text-natural" strokeWidth="2" />
      </svg>
      <div className="absolute right-5 top-5 font-display text-[0.65rem] tracking-[0.18em] text-mist/70">
        N / 001
      </div>
      <div className="absolute bottom-5 left-5 h-px w-20 bg-natural/50" />
    </div>
  );
}
