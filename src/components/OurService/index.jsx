import Image from "next/image";
import GetStarted from "../button/GetStarted";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { GiSewingMachine } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";

export default function OurService() {
  const CardDetail = [
    {
      id: 1,
      icon: <GiSewingMachine />,
      service: "Production",
    },
    {
      id: 2,
      icon: <GiSewingMachine />,
      service: "Patterns",
    },
    {
      id: 3,
      icon: <GiSewingMachine />,
      service: "Sewings",
    },
    {
      id: 4,
      icon: <GiSewingMachine />,
      service: "Cuttings",
    },
    {
      id: 5,
      icon: <GiSewingMachine />,
      service: "Customs",
    },
  ];
  return (
    <div className="w-full h-fit bg-[#f6f6f6] flex flex-col items-center text-sm px-16 max-sm:px-8 py-28 max-sm:py-16 space-y-14">
      <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1">
        <span className="w-full flex flex-col text-left max-sm:text-center justify-around max-sm:justify-between max-sm:space-y-6 max-sm:items-center">
          <p className="text-[#da844a] text-lg tracking-widest">OUR SERVICES</p>
          <span className="text-5xl max-sm:text-4xl leading-tight">
            Clothes that make you smile
          </span>
          <span className="w-fit text-sm px-8 py-3 border bg-transparent border-gray-400 hover:cursor-pointer hover:border-[#da844a] hover:bg-[#da844a] hover:text-white transition-all ease-in-out duration-300">
            GET STARTED
          </span>
        </span>
        {CardDetail.map((item, idx) => (
          <div
            className="flex flex-col w-full h-72 bg-white p-10 justify-between border border-white hover:border-[#da844a] ease-in-out duration-300 transition-all"
            id={idx}
            key={item.id}
          >
            <div className="w-12 h-12 bg-[#da844a]"></div>
            <p className="text-3xl">{item.service}</p>
            <p className="text-[16px]">
              Duis varius aliquam augue, et vestibulum magna.
            </p>
            <span className="w-fit flex flex-row space-x-3 items-center text-[14px] text-[#da844a] hover:text-black hover:cursor-pointer transition-all duration-300 ease-in-out">
              <p>READ MORE</p>
              <FaArrowRight />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
