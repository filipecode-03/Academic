import bg from '../assets/images/pattern-bg.svg'

function TestimonialImage({ image }) {
  return (
    <div className="relative flex justify-center items-center">
        <img
            src={bg}
            alt=""
            className="absolute w-150"
        />
        <img
            src={image}
            alt=""
            className="relative z-10 w-87.5"
        />
    </div>
  )
}

export default TestimonialImage