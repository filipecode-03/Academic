import intro from '../assets/images/image-intro-desktop.jpg'
import iconSnappy from '../assets/images/icon-snappy-process.svg'
import iconAffordable from '../assets/images/icon-affordable-prices.svg'
import iconPeople from '../assets/images/icon-people-first.svg' 

function Prin() {
    return (
        <main>
            <img src={intro} alt="intro" />
            <section className='bg-[url("../assets/images/bg-pattern-intro-left-mobile.svg")] bg-[#2C2640]'>
                <h1>Humanizing your insurance.</h1>
                <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                <button>VIEW PLANS</button>
            </section>
            <section>
                <hr />
                <h1></h1>
                <div className='flex flex-col gap-5'>
                    <div>
                        <img src={iconSnappy} alt="snappy" />
                        <h1></h1>
                        <p></p>
                    </div>
                    <div>
                        <img src={iconAffordable} alt="affordable" />
                        <h1></h1>
                        <p></p>
                    </div>
                    <div>
                        <img src={iconPeople} alt="people" />
                        <h1></h1>
                        <p></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Prin