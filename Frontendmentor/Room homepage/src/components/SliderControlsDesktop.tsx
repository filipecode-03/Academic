import angleLeft from "../assets/images/icon-angle-left.svg";
import angleRight from "../assets/images/icon-angle-right.svg";

type Props = {
  nextSlide: () => void;
  prevSlide: () => void;
};

export default function SliderControlsDesktop({
  nextSlide,
  prevSlide,
}: Props) {
  return (
    <div className="flex">
      <button
        onClick={prevSlide}
        className="
          bg-black
          p-8 cursor-pointer
          hover:bg-zinc-700
          transition
        "
      >
        <img src={angleLeft} alt="" />
      </button>

      <button
        onClick={nextSlide}
        className="
          bg-black
          p-8 cursor-pointer
          hover:bg-zinc-700
          transition
        "
      >
        <img src={angleRight} alt="" />
      </button>
    </div>
  );
}