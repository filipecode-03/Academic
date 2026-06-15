import bg from '../assets/images/pattern-bg.svg'
import prev from '../assets/images/icon-prev.svg'
import next from '../assets/images/icon-next.svg'

function TestimonialImage({ image, onPrev, onNext }) {
  return (
    <div
      className="
        relative
        mt-10
        flex
        justify-center
        items-center

        lg:mt-0
        lg:w-[45%]
      "
    >
      <img
        src={bg}
        alt=""
        className="
          absolute
    w-md
    lg:w-156
    max-w-none
        "
      />

      <img
        src={image}
        alt=""
        className="
          relative
          z-10
          w-87.5
          shadowB

          lg:w-135
        "
      />

      <div
        className="
          absolute
          -bottom-5
          z-20
          flex
          items-center
          gap-10
          bg-white
          rounded-full
          p-4

          lg:left-20
          lg:bottom-0
          lg:translate-y-1/2
        "
      >
        <button
          onClick={onPrev}
          className="cursor-pointer"
        >
          <img src={prev} alt="prev" />
        </button>

        <button
          onClick={onNext}
          className="cursor-pointer"
        >
          <img src={next} alt="next" />
        </button>
      </div>
    </div>
  )
}

export default TestimonialImage