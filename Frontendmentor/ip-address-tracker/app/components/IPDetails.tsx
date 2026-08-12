import { type IPData } from "../types/ip";

interface IPDetailsProps {
  data: IPData | null;
}

function IPDetails({ data }: IPDetailsProps) {
  if (!data) {
    return null;
  }

  return (
    <section className="absolute top-[220px] left-1/2 z-10 w-[90%] max-w-[1100px] -translate-x-1/2 rounded-[15px] bg-white px-6 py-7 shadow-lg">
      <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-4 md:gap-0 md:text-left">
        <div className="flex flex-col gap-2 md:px-8">
          <span className="text-[10px] font-bold tracking-[2px] text-gray-500">
            IP ADDRESS
          </span>

          <strong className="text-[18px] font-medium text-gray-800 md:text-[20px]">
            {data.ip}
          </strong>
        </div>

        <div className="flex flex-col gap-2 border-gray-200 md:border-l md:px-8">
          <span className="text-[10px] font-bold tracking-[2px] text-gray-500">
            LOCATION
          </span>

          <strong className="text-[18px] font-medium text-gray-800 md:text-[20px]">
            {data.location.city}, {data.location.region}
          </strong>
        </div>

        <div className="flex flex-col gap-2 border-gray-200 md:border-l md:px-8">
          <span className="text-[10px] font-bold tracking-[2px] text-gray-500">
            TIMEZONE
          </span>

          <strong className="text-[18px] font-medium text-gray-800 md:text-[20px]">
            UTC {data.location.timezone}
          </strong>
        </div>

        <div className="flex flex-col gap-2 border-gray-200 md:border-l md:px-8">
          <span className="text-[10px] font-bold tracking-[2px] text-gray-500">
            ISP
          </span>

          <strong className="break-words text-[18px] font-medium text-gray-800 md:text-[20px]">
            {data.isp}
          </strong>
        </div>
      </div>
    </section>
  );
}

export default IPDetails;