import { useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import ali from '../../assets/images/avatar-ali.png'
import anisha from '../../assets/images/avatar-anisha.png'
import richard from '../../assets/images/avatar-richard.png'
import shanai from '../../assets/images/avatar-shanai.png'

function Cards() {

    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
        emblaApi.off("select", onSelect);
    };
    }, [emblaApi]);

    const testimonials = [
    {
        image: anisha,
        name: "Anisha Li",
        text: `Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.`
    },
    {
        image: ali,
        name: "Ali Bravo",
        text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
    },
    {
        image: richard,
        name: "Richard Watts",
        text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"
    },
    {
        image: shanai,
        name: "Shanai Gough",
        text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
    }
    ];

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className="embla__slide">
                            <div className="mt-10 rounded bg-gray-50 px-6 pb-8 pt-14 text-center relative">
                                <img src={testimonial.image} alt={testimonial.name} className="absolute left-1/2 top-0 w-18 -translate-x-1/2 -translate-y-1/2"
                                />
                                <h3 className="font-bold text-[#242D52]">
                                {testimonial.name}
                                </h3>
                                <p className="mt-4 text-[#9095A7]">
                                "{testimonial.text}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`h-3 w-3 rounded-full border border-[#F3613C] ${
                            selectedIndex === index
                            ? "bg-[#F3613C]"
                            : "bg-white"
                        }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards