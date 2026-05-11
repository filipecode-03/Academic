import bgMobile from "../images/bg-main-mobile.png"
import logo from "../images/card-logo.svg"

function Cards({ cardData }) {
    return (
        <div className="relative">
            {/* Background */}
            <img
                src={bgMobile}
                alt="background"
                className="w-full md:h-screen"
            />

            {/* BACK CARD */}
            <div
                className="
                absolute
                top-8
                right-5
                w-70
                h-38.5
                rounded-xl
                bg-cover
                bg-center
                bg-[url('./images/bg-card-back.png')]
                md:w-100
                md:h-55
            "
            >
                <p
                    className="
                    absolute
                    right-8
                    top-17.5
                    text-white
                    tracking-[2px]
                    text-sm
                    md:text-lg
                "
                >
                    {cardData.cvc || "000"}
                </p>
            </div>

            {/* FRONT CARD */}
            <div
                className="
                absolute
                top-32
                left-4
                w-70
                h-38.5
                rounded-xl
                bg-cover
                bg-center
                p-5
                bg-[url('./images/bg-card-front.png')]
                md:w-100
                md:h-55
            "
            >
                <img
                    src={logo}
                    alt="logo"
                    className="w-14 md:w-20"
                />

                <div className="mt-8 md:mt-14">
                    {/* NUMBER */}
                    <h2
                        className="
                        text-white
                        text-xl
                        tracking-[3px]
                        md:text-3xl
                    "
                    >
                        {cardData.cardNumber ||
                            "0000 0000 0000 0000"}
                    </h2>

                    {/* NAME + DATE */}
                    <div className="flex justify-between mt-4">
                        <p
                            className="
                            text-white
                            uppercase
                            text-xs
                            tracking-[2px]
                            md:text-sm
                        "
                        >
                            {cardData.name || "Jane Appleseed"}
                        </p>

                        <p
                            className="
                            text-white
                            text-xs
                            tracking-[2px]
                            md:text-sm
                        "
                        >
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