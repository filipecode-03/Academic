import { testimonials } from "../../data/testimonials";

function CardsDesktop() {
  return (
    <div className="relative overflow-hidden">
      {/* Fade esquerdo */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />

      {/* Fade direito */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

      <div className="marquee-track py-10">
        {[...testimonials, ...testimonials].map(
          (testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="mx-4 w-135"
            >
              <div className="relative min-h-65 bg-[#FAFAFA] px-8 pb-8 pt-14 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="absolute left-1/2 top-0 w-18 -translate-x-1/2 -translate-y-1/2"
                />

                <h3 className="font-bold text-[#242D52]">
                  {testimonial.name}
                </h3>

                <p className="mt-6 text-[#9095A7] leading-7">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CardsDesktop;