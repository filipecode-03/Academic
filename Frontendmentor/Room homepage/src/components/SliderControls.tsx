import angleLeft from '../assets/images/icon-angle-left.svg'
import angleRight from '../assets/images/icon-angle-right.svg'

type Props = {
  nextSlide: () => void;
  prevSlide: () => void;
};

export default function SliderControls({
  nextSlide,
  prevSlide,
}: Props) {
  return (
    <div
      className="
      absolute
      bottom-0
      right-0
      flex
    "
    >
      <button
        onClick={prevSlide}
        className="
        bg-black
        p-4
        hover:bg-zinc-700
      "
      >
        <img src={angleLeft} alt="left" />
      </button>

      <button
        onClick={nextSlide}
        className="
        bg-black
        p-4
        hover:bg-zinc-700
      "
      >
        <img src={angleRight} alt="right" />
      </button>
    </div>
  );
}