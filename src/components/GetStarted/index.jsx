import Image from "next/image";
import { FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";
import { PiChatsCircle } from "react-icons/pi";

export default function GetStarted() {
  return (
    <div className="w-full bg-[#141433] flex flex-col text-white items-center text-sm px-20 py-28 max-sm:px-7 space-y-14">
      <div className="w-full items-center flex flex-col text-center space-y-6">
        <p className="text-[#32bab3] text-lg tracking-widest">GET STARTED</p>
        <span className="text-5xl max-sm:text-4xl w-[50%] max-sm:w-full leading-tight">
          Get Decorated With Our Best Products
        </span>
        <p>Pellentesque dui diam, tincidunt sit amet ligula viverra sodales.</p>
      </div>
      <div className="grid max-sm:w-full grid-cols-3 gap-12 max-sm:flex max-sm:flex-col max-sm:gap-3">
        <span className="w-[360px] max-sm:w-full h-48 flex flex-col justify-center items-start p-5 space-y-5 border border-gray-500 hover:border-white ">
          <div className="w-10 h-10 rounded-full flex justify-center items-center text-[#32bab3]">
            <FaRegCalendarAlt size={30} />
          </div>
          <p className="text-2xl">Appointment</p>
          <p>Lorem ipsum dolor sit amet, adipi.</p>
        </span>
        <span className="w-[360px] max-sm:w-full h-48 flex flex-col justify-center items-start p-5 space-y-5 border border-gray-500 hover:border-white ">
          <div className="w-10 h-10 rounded-full flex justify-center items-center text-[#32bab3]">
            <PiChatsCircle size={60} />
          </div>
          <p className="text-2xl">FAQs Page</p>
          <p>Lorem ipsum dolor sit amet, adipi.</p>
        </span>
        <span className="w-[360px] max-sm:w-full h-48 flex flex-col justify-center items-start p-5 space-y-5 border border-gray-500 hover:border-white ">
          <div className="w-10 h-10 rounded-full flex justify-center items-center text-[#32bab3]">
            <FaPhoneAlt size={30} />
          </div>
          <p className="text-2xl">24/7 Support</p>
          <p>Lorem ipsum dolor sit amet, adipi.</p>
        </span>
      </div>
    </div>
  );
}
