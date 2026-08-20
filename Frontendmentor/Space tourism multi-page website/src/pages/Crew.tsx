import PageBackground from "../components/PageBackground";
import { backgrounds } from "../config/backgrounds";

function Crew() {
    return (
        <PageBackground 
            mobile={backgrounds.crew.mobile} 
            tablet={backgrounds.crew.tablet} 
            desktop={backgrounds.crew.desktop}
        >
            <div className="p-6 text-white text-center">
                <h2 className="font-['Barlow_Condensed'] tracking-[3px] text-[20px]">
                    <span className="mr-5 font-semibold text-gray-500">
                        02
                    </span>
                    MEET YOUR CREW
                </h2>
            </div>
        </PageBackground>
    )
}

export default Crew