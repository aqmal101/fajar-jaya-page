import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function WhyChooseUs() {
  return (
    <div className="w-full h-fit bg-white flex flex-row max-sm:flex-col items-center text-sm px-20 max-sm:px-6 py-20 max-sm:py-6 space-x-16 max-sm:space-x-0 max-sm:space-y-10">
      <div className="w-[45%] max-sm:w-full h-screen max-sm:h-[400px] bg-[#2a2f27]"></div>
      <div className="w-1/2 max-sm:w-full items-center flex flex-col space-y-12 text-left">
        <div className="w-full flex flex-col text-left space-y-6">
          <span className="text-[#da844a] text-lg max-sm:text-base tracking-widest">
            WHY CHOOSE US
          </span>
          <span className="text-5xl w-[70%] max-sm:w-full max-sm:text-4xl leading-tight ">
            Textiles That Are Feather-Light
          </span>
        </div>
        <div className="space-y-5">
          <div className="flex flex-col space-y-4">
            <span className="text-xl text-gray-500">01.</span>
            <span className="text-2xl max-sm:text-xl">
              Modern Process and Factory
            </span>
            <span className="text-lg max-sm:text-base text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </span>
          </div>
          <div className="w-full h-[2px] border bg-black-900" />
          <div className="flex flex-col space-y-4">
            <span className="text-xl text-gray-500">02.</span>
            <span className="text-2xl">Professional Team and Staffs</span>
            <span className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </span>
          </div>
          <div className="w-full h-[2px] border bg-black-900" />
          <div className="flex flex-col space-y-4">
            <span className="text-xl text-gray-500">03.</span>
            <span className="text-2xl">24/7 Full Support</span>
            <span className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </span>
          </div>
          <div className="w-full h-[2px] border bg-black-900" />
        </div>
      </div>
    </div>
  );
}
