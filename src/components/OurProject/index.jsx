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
    { id: 1, tag: "Hanna Brand", product: "Linnen Outter" },
    { id: 2, tag: "Inn Company", product: "Casual Outfit" },
    { id: 3, tag: "Jimmy Clothing", product: "White Blazer" },
    { id: 4, tag: "Hanna Brand", product: "White Outfit" },
    { id: 5, tag: "Inn Company", product: "Knit Jacket" },
    { id: 6, tag: "Jimmy Clothing", product: "Set of Black" },
  ];
  return (
    <div className="w-full bg-white flex flex-col items-center text-sm px-20 max-sm:px-6 max-sm:py-10 py-28 space-y-14">
      <div className="w-full items-center flex flex-col text-center space-y-6">
        <p className="text-[#da844a] text-lg tracking-widest">OUR PROJECT</p>
        <span className="text-5xl max-sm:text-4xl w-full leading-tight">
          Clothes for Your Best Moments
        </span>
      </div>
      <div className="grid max-sm:w-full grid-cols-3 grid-rows-2 gap-8 max-sm:gap-2 max-sm:grid-cols-1">
        {BlogList.map((item, idx) => (
          <div
            className="w-[375px] max-sm:w-full max-sm:h-56 h-96 bg-purple-800/30 p-5 max-sm:p-4 flex flex-col justify-between"
            id={idx}
            key={item.id}
          >
            <span className="w-full flex justify-end">
              <span className="uppercase w-fit py-1 max-sm:text-[10px] px-3 bg-white text-[#da844a]">
                {item.tag}
              </span>
            </span>
            <div className="w-full space-y-4">
              <p className="text-2xl max-sm:text-lg">{item.product}</p>
              <p className="text-base max-sm:hidden">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </p>
              <span className="flex flex-row space-x-3 items-center text-[14px] max-sm:text-xs text-[#da844a] hover:text-white hover:cursor-pointer transition-all duration-300 ease-in-out">
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
