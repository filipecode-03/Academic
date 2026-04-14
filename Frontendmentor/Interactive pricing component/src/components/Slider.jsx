import { useState } from "react";
import icon from "../images/icon-slider.svg";

function Slider() {
  const [value, setValue] = useState(50);

  return (
    <div className="w-[80%] mx-auto mt-8 mb-12">

      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-2.5 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #A5F2EA ${value}%, #ECF0F9 ${value}%)`
        }}
      />

      <style>
        {`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          background-color: #11D8C5;
          background-image: url("${icon}");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 25px;
          cursor: grab;
          box-shadow: rgba(169, 255, 246, 0.9) 0px 16px 12px 4px;
        }

        input[type="range"]::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.1);
        }

        input[type="range"]::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 9999px;
          background-color: #22c55e;
          background-image: url("${icon}");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 12px;
          border: none;
          cursor: grab;
        }
        `}
      </style>

    </div>
  );
}

export default Slider;