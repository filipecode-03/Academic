import { useRef } from "react";

function Avatar() {

    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollToItem = (index: number) => {
        const items = carouselRef.current?.children;

        if (items && items[index]) {
                (items[index] as HTMLElement).scrollIntoView({
                behavior: "smooth",
                inline: "start",
                block: "nearest",
                });
            }
    };

  return (
    <>
      {/* MOBILE */}
      <div className="lg:hidden">
        <div ref={carouselRef}
 className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a onClick={() => scrollToItem(0)} className="btn btn-xs">1</a>
  <a onClick={() => scrollToItem(1)} className="btn btn-xs">2</a>
  <a onClick={() => scrollToItem(2)} className="btn btn-xs">3</a>
  <a onClick={() => scrollToItem(3)} className="btn btn-xs">4</a>
</div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        {/* Marquee do Kibo UI */}
      </div>
    </>
  );
}

export default Avatar