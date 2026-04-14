import { useState } from "react";

function Switch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="mt-8 flex items-center justify-center gap-4">

      {/* Texto esquerdo */}
      <span className="text-[14px] text-gray-700">
        Monthly Billing
      </span>

      {/* Switch */}
      <div
        onClick={() => setEnabled(!enabled)}
        className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition
        ${enabled ? "bg-[#7BE9DE]" : "bg-gray-300 hover:bg-[#7BE9DE]"}`}
      >
        <div
          className={`bg-white w-4.5 h-4.5 rounded-full shadow-md transform transition
          ${enabled ? "translate-x-7.5" : "translate-x-0"}`}
        />
      </div>

      {/* Texto direito */}
      <div className="flex items-center gap-2">
  <span className="text-[14px] text-gray-600">
    Yearly Billing
  </span>

  <span className="bg-[#FDEEE9] text-red-500 text-[12px] font-semibold px-3 py-1 rounded-full">
    -25% <span className="hidden lg:inline">discount</span>
  </span>
</div>
    </div>
  );
}

export default Switch;