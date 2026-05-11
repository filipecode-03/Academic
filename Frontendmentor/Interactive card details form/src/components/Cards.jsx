import bgMobile from "../images/bg-main-mobile.png"
import logo from "../images/card-logo.svg"

function Cards({ cardData }) {
    return (
        <div className="relative">
            {/* Background */}
            <img src={bgMobile} alt="background" className="w-full h-70"/>
            {/* BACK CARD */}
            <div className=" absolute top-10 right-5 w-80 h-45 rounded-xl bg-cover bg-center bg-[url('./images/bg-card-back.png')]">
                <p className="absolute right-10 top-20 text-white tracking-[2px] text-[12px]">
                    {cardData.cvc || "000"}
                </p>
            </div>
            {/* FRONT CARD */}
            <div className="absolute top-35 left-4 w-80 h-43 rounded-xl bg-cover bg-center p-5 bg-[url('./images/bg-card-front.png')]">
                <img src={logo} alt="logo" className="w-14"/>
                <div className="mt-10">
                    {/* NUMBER */}
                    <h2 className=" text-white text-xl tracking-[3px]">
                        {cardData.cardNumber || "0000 0000 0000 0000"}
                    </h2>
                    {/* NAME + DATE */}
                    <div className="flex justify-between mt-4 text-[10px]">
                        <p className="text-white uppercase tracking-[2px]">
                            {cardData.name || "Jane Appleseed"}
                        </p>
                        <p className="text-white tracking-[2px]">
                            {cardData.month || "00"}/
                            {cardData.year || "00"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards