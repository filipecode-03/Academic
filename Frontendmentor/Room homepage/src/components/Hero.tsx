import SliderControls from "./SliderControls";
import { slides } from "../data/slides";
import arrow from '../assets/images/icon-arrow.svg'

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
    <section className="flex flex-col">
      {/* Imagem */}
      <div className="relative">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet={slide.imageDesktop}
          />
          <img
            src={slide.imageMobile}
            alt={slide.title}
            className="w-full"
          />
        </picture>
        <SliderControls
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
      {/* Texto */}
      <div className="px-8 py-14">
        <h1 className="text-4xl font-bold">
          {slide.title}
        </h1>
        <p className="mt-4 text-gray-500">
          {slide.description}
        </p>
        <button className="mt-8 flex items-center font-semibold gap-4 uppercase tracking-[10px]">
          Shop Now
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </section>
  );
}

export default Hero;