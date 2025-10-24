import { useLocation, useNavigate } from "react-router-dom";
import picture from "../images/illustration-thank-you.svg";

function Thanks() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedNumber = location.state?.selectedNumber;

  return (
    <div className="font-['Overpass'] bg-[#141519] h-screen">
      <div className="space-y-5 bg-[#202731] mx-[35px] lg:mx-auto lg:w-[430px] p-[30px] relative top-[100px] rounded-xl text-center">
        <img src={picture} alt="Thank you" className="mx-auto" />
        <div className="bg-[#262D37] text-[#FC7613] rounded-full py-1 px-4 inline-block">
          You selected {selectedNumber} out of 5
        </div>
        <h1 className="text-white text-2xl font-semibold">Thank you!</h1>
        <p className="text-gray-400">
          We appreciate you taking the time to give a rating.  
          If you ever need more support, don’t hesitate to get in touch!
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-3 bg-[#FC7613] hover:bg-white tracking-[3px] rounded-full py-2.5 px-6 font-semibold"
        >
          GO BACK
        </button>
      </div>
    </div>
  );
}

export default Thanks;
