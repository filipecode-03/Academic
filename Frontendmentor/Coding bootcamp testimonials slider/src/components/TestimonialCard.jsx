import quotes from '../assets/images/pattern-quotes.svg'

function TestimonialCard({ text, name, role }) {
  return (
    <div
      className="
        relative
    text-center
    mt-30
    mb-30

    lg:text-left
    lg:w-[55%]
    lg:mt-0
    lg:mb-0
    lg:z-20
    lg:-mr-14
      "
    >
      <img
        src={quotes}
        alt="quotes"
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-20

          lg:left-20
          lg:translate-x-0
          lg:w-28
        "
      />

      <div className="relative z-10">
        <p
          className="
            max-w-132
            mx-auto
            text-[20px]

            lg:mx-0
            lg:max-w-152
            lg:text-[2rem]
            lg:leading-tight
          "
        >
          {text}
        </p>

        <div
          className="
            mt-8

            lg:flex
            lg:items-center
            lg:gap-2
          "
        >
          <h2 className="font-bold">
            {name}
          </h2>

          <span className="text-gray-500 block lg:inline">
            {role}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard