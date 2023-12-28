import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiChatsCircle } from "react-icons/pi";

export default function GetStarted() {
  const LogoList = [
    <FaFacebookF />,
    <FaYoutube />,
    <FaLinkedin />,
    <FaXTwitter />,
  ];
  return (
    <div className="w-full bg-[#141433] flex flex-col text-white items-center text-sm px-20 py-28 space-y-14">
      <div className="w-full items-center flex flex-col text-center space-y-6">
        <p className="text-[#da844a] text-lg tracking-widest">GET STARTED</p>
        <span className="text-5xl w-[50%] leading-tight">
          Get Decorated With Our Best Products
        </span>
        <p>Pellentesque dui diam, tincidunt sit amet ligula viverra sodales.</p>
      </div>
      <div className="grid grid-cols-3 gap-12">
        <span className="w-[360px] h-48 flex flex-col justify-center items-start p-5 space-y-5 border border-gray-500 hover:border-white ">
          <div className="w-10 h-10 rounded-full flex justify-center items-center text-[#da844a]">
            <FaRegCalendarAlt size={30} />
          </div>
          <p className="text-2xl">Appointment</p>
          <p>Lorem ipsum dolor sit amet, adipi.</p>
        </span>
        <span className="w-[360px] h-48 flex flex-col justify-center items-start p-5 space-y-5 border border-gray-500 hover:border-white ">
          <div className="w-10 h-10 rounded-full flex justify-center items-center text-[#da844a]">
            <PiChatsCircle size={60} />
          </div>
          <p className="text-2xl">FAQs Page</p>
          <p>Lorem ipsum dolor sit amet, adipi.</p>
        </span>
        <span className="w-[360px] h-48 flex flex-col justify-center items-start p-5 space-y-5 border border-gray-500 hover:border-white ">
          <div className="w-10 h-10 rounded-full flex justify-center items-center text-[#da844a]">
            <FaPhoneAlt size={30} />
          </div>
          <p className="text-2xl">24/7 Support</p>
          <p>Lorem ipsum dolor sit amet, adipi.</p>
        </span>
      </div>
    </div>
  );
}
