import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";

export default function PricingPlan() {
  const PlanList = [
    { class: "Basic Package", amount: "240", cardHeight: "h-[500px]" },
    { class: "Regular Package", amount: "320", cardHeight: "h-[560px]" },
    { class: "Duluxe Package", amount: "450", cardHeight: "h-[500px]" },
  ];
  return (
    <div className="w-full h-fit bg-[#2a2f27] flex flex-col items-center text-sm px-20 max-sm:px-6 py-20 space-y-16">
      <div className="w-full flex flex-col text-center space-y-6">
        <span className="text-[#da844a] text-lg tracking-widest">
          PRICING PLAN
        </span>
        <span className="text-5xl w-full leading-tight text-white">
          Choose Your Plan
        </span>
      </div>
      <div className="w-full flex flex-row max-sm:flex-col max-sm:space-y-7 justify-between items-center space-x-5 max-sm:space-x-0">
        {PlanList.map((item, idx) => (
          <div
            className={`w-[340px] max-sm:w-full ${item.cardHeight} flex flex-col justify-center items-center  bg-white p-10 text-center space-y-7`}
            id={item}
            key={idx}
          >
            <p className="text-2xl">{item.class}</p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consec tetur adipiscing.
            </p>
            <p>
              $ <span className="text-4xl">{item.amount}</span>
              <span className="text-[#da844a] text-sm">/ PACK</span>
            </p>
            <div className="w-full flex flex-col justify-center items-center space-y-3">
              <span className="flex flex-row items-center space-x-2">
                <IoCheckmark className="text-[#91562e]" />
                <p className="text-gray-500 text-sm">Textile Consultation</p>
              </span>
              <span className="flex flex-row items-center space-x-2">
                <IoCheckmark className="text-[#da844a]" />
                <p className="text-gray-500 text-sm">Modern Methods</p>
              </span>
              <span className="flex flex-row items-center space-x-2">
                <IoCheckmark className="text-[#da844a]" />
                <p className="text-gray-500 text-sm">Discount Services</p>
              </span>
              <span className="flex flex-row items-center space-x-2">
                <IoCheckmark className="text-[#da844a]" />
                <p className="text-gray-500 text-sm">24/7 Full Support</p>
              </span>
            </div>
            <span className="w-fit text-sm px-8 py-3 border bg-transparent border-gray-300 hover:cursor-pointer hover:border-[#da844a] hover:bg-[#da844a] hover:text-white transition-all ease-in-out duration-300">
              GET STARTED
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
