import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'

function Start() {
    return (
        <section className='p-8 pt-14 bg-[url("./assets/images/mobile/image-hero.jpg")] bg-cover h-screen'>
            <div className='flex justify-between items-center'>
                <img src={logo} alt="logo" />
                <img src={menu} alt="menu" />
            </div>
            <h1 className='mt-54 p-7 pt-9 font-["Josefin_Sans"] text-[55px] leading-13 font-light border-3 text-white border-white'>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </section>
    )
}

export default Start