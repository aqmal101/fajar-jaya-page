import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function OurProject() {
  const BlogList = [
    { tag: "Hanna Brand", product: "Linnen Outter" },
    { tag: "Inn Company", product: "Casual Outfit" },
    { tag: "Jimmy Clothing", product: "White Blazer" },
    { tag: "Hanna Brand", product: "White Outfit" },
    { tag: "Inn Company", product: "Knit Jacket" },
    { tag: "Jimmy Clothing", product: "Set of Black" },
  ];
  return (
    <div className="w-full bg-white flex flex-col items-center text-sm px-20 py-28 space-y-14">
      <div className="w-full items-center flex flex-col text-center space-y-6">
        <p className="text-[#da844a] text-lg tracking-widest">OUR PROJECT</p>
        <span className="text-5xl w-full leading-tight">
          Clothes for Your Best Moments
        </span>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        {BlogList.map((item, idx) => (
          <div
            className="w-[375px] h-96 bg-purple-600/20 p-5 flex flex-col justify-between"
            id={idx}
          >
            <span className="w-full flex justify-end">
              <span className="uppercase w-fit py-1 px-3 bg-white text-[#da844a]">
                {item.tag}
              </span>
            </span>
            <div className="w-full space-y-4">
              <p className="text-2xl">{item.product}</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </p>
              <span className="flex flex-row space-x-3 items-center text-[14px] text-[#da844a] hover:text-white hover:cursor-pointer transition-all duration-300 ease-in-out">
                <p>READ MORE</p>
                <FaArrowRight />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
