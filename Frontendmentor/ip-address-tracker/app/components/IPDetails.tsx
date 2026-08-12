import { type IPData } from "../types/ip";

interface IPDetailsProps {
  data: IPData | null;
}

function IPDetails({ data }: IPDetailsProps) {
  if (!data) {
    return null;
  }

  return (
    <div className="absolute top-47.5 left-1/2 z-10 w-[90%] max-w-275 -translate-x-1/2 rounded-[15px] bg-white px-6 py-7 shadow-md">
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-stretch md:justify-between md:text-left">

        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold tracking-[2px] text-gray-500">
            IP ADDRESS
          </span>

          <strong className="text-[20px] font-medium text-gray-800">
            {data.ip}
          </strong>
        </div>

        <div className="hidden w-px bg-gray-200 md:block" />

        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold tracking-[2px] text-gray-500">
            LOCATION
          </span>

          <strong className="text-[20px] font-medium text-gray-800">
            {data.location.city}, {data.location.region}
          </strong>
        </div>

        <div className="hidden w-px bg-gray-200 md:block" />

        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold tracking-[2px] text-gray-500">
            TIMEZONE
          </span>

          <strong className="text-[20px] font-medium text-gray-800">
            UTC {data.location.timezone}
          </strong>
        </div>

        <div className="hidden w-px bg-gray-200 md:block" />

        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold tracking-[2px] text-gray-500">
            ISP
          </span>

          <strong className="text-[20px] font-medium text-gray-800">
            {data.isp}
          </strong>
        </div>

      </div>
    </div>
  );
}

export default IPDetails;