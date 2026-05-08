import bgMobile from '../images/bg-main-mobile.png'
import logo from '../images/card-logo.svg'

function Cards() {
    return (
        <div>
            <img src={bgMobile} alt="backgroud" className='w-full' />
            <div className='bg-[url("./images/bg-card-back.png")]'>

            </div>
            <div className='p-5 bg-[url("./images/bg-card-front.png")] bg-no-repeat'>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Cards