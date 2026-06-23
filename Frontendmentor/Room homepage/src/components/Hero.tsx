import SliderControls from "./SliderControls";
import { slides } from "../data/slides";
import arrow from "../assets/images/icon-arrow.svg";
import SliderControlsDesktop from "./SliderControlsDesktop";

type HeroProps = {
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
};

function Hero({
  currentSlide,
  setCurrentSlide,
}: HeroProps) {
  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section
  className="
    flex flex-col
    lg:grid
    lg:grid-cols-[60%_42%]
  "
>
      <div className="relative">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet={slide.imageDesktop}
          />
          <img
          src={slide.imageMobile}
          alt={slide.title}
          className="
            w-full
            h-full
            object-cover
          "
        />
        </picture>
  <div className="lg:hidden">
    <SliderControls
      nextSlide={nextSlide}
      prevSlide={prevSlide}
    />
  </div>
      </div>
      <div
        className="
          relative
          flex
          flex-col
          justify-center

          px-8
          py-14

          lg:px-20
          lg:py-0
        "
      >
        <h1
  className="
    text-[2.5rem]
    leading-none
    font-bold
    md:max-w-150
    lg:text-6xl
  "
>
          {slide.title}
        </h1>
       <p
  className="
    mt-6
    text-gray-500 text-[18px]
    leading-7 md:max-w-125
  "
>
          {slide.description}
        </p>
<button
  className="
    mt-8
    flex
    items-center
    gap-6
    cursor-pointer w-fit
    uppercase
    tracking-[12px]

    hover:text-gray-500
    transition
  "
>          Shop Now
          <img
            src={arrow}
            alt=""
            aria-hidden="true"
          />
        </button>
        {/* Desktop */}
  <div
    className="
      hidden
      lg:block

      absolute
      bottom-0
      left-0
    "
  >
    <SliderControlsDesktop
      nextSlide={nextSlide}
      prevSlide={prevSlide}
    />
  </div>
      </div>
    </section>
  );
}

export default Hero;