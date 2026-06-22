import dark from '../assets/images/image-about-dark.jpg'
import light from '../assets/images/image-about-light.jpg'

function About() {
  return (
    <section>
        {/* imagem esquerda */}
        <img src={dark} alt="Dark furniture" className='w-full'/>
        {/* texto */}
        <div className='p-8'>
            <h2 className='font-bold text-[20px] uppercase tracking-[5px]'>About our furniture</h2>
            <p className='text-gray-500 mt-2'>
                Our multifunctional collection blends design and function to suit your individual taste.
  Make each room unique, or pick a cohesive theme that best express your interests and what
  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.
            </p>
        </div>
        {/* imagem direita */}
        <img src={light} alt="Light furniture" className='w-full'/>
    </section>
  );
}

export default About;