import dark from '../assets/images/image-about-dark.jpg'
import light from '../assets/images/image-about-light.jpg'

function About() {
  return (
   <section
  className="
    flex
    flex-col

    lg:grid
    lg:grid-cols-[30%_40%_30%]
  "
>
        {/* imagem esquerda */}
<img
  src={dark}
  alt="Dark furniture"
  className="
    w-full
    h-full
    object-cover
  "
/>        {/* texto */}
        <div
  className="
    flex
    flex-col
    justify-center

    p-8

    lg:px-12
  "
>
            <h2
  className="
    font-bold
    uppercase
    tracking-[8px]
    text-xl md:text-2xl
  "
>About our furniture</h2>
<p
  className="
    mt-4
    text-gray-500
    leading-7
  "
>                Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
            </p>
        </div>
        {/* imagem direita */}
<img
  src={light}
  alt="Light furniture"
  className="
    w-full
    h-full
    object-cover
  "
/>    </section>
  );
}

export default About;