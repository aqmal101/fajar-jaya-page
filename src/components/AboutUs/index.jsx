import Image from "next/image";
import { FaFacebookF, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { IoMdPin } from "react-icons/io";

export default function About() {
  return (
    <main className="w-full ">
      <div className="h-[700px] max-sm:bg-yellow-500 max-sm:hidden px-16 flex flex-row-reverse justify-between items-center">
        <div className="h-full flex w-1/2 px-16 py-20 flex-col justify-center space-y-8 bg-white">
          <h2 className="text-[#da844a] font-semibold tracking-widest text-lg">
            ABOUT US
          </h2>
          <h1 className="text-5xl leading-relaxed text-black">
            Do Well, Live Well & Dress Really Well
          </h1>
          <p className="text-black">
            Pellentesque dui diam, tincidunt sit amet ligula viverra, sodales
            pharetra erat. Mauris quis nibh dictum, scelerisque odio ac, sodales
            justo. Donec ultricies, nulla sit amet bibendum rutrum.
          </p>
          <div className="flex h-fit flex-row items-center space-x-10">
            <span className="text-[14px] space-y-4">
              <div className="w-10 h-10 bg-gray-400/20 p-1 flex flex-col items-center justify-center">
                <IoMdPin className="w-8 h-8 text-[#da844a]" />
              </div>
              <p className="text-lg">Visit Us</p>
              <p>6235 Walter Common, Port Abe Alabama 54890</p>
            </span>
            <span className="text-[14px] space-y-4">
              <div className="w-10 h-10 bg-gray-400/20 p-1 flex flex-col items-center justify-center">
                <FaPhoneAlt className="w-6 h-6 text-[#da844a] " />
              </div>
              <p className="text-lg">Contact </p>
              <p>textiln@mail.com +1 (234) 567 890</p>
            </span>
          </div>
          <span className="w-fit text-sm px-8 py-3 border bg-white border-gray-500 hover:cursor-pointer hover:border-[#da844a] hover:bg-[#da844a] hover:text-white transition-all ease-in-out duration-300">
            LEARN MORE
          </span>
        </div>
        <div className="h-[90%] bg-[#2a2f27] w-[45%] relative">
          <div className="h-32 w-40 bg-white absolute bottom-6 left-6 flex flex-col p-3 justify-around items-center">
            <span className="text-5xl">25+</span>
            <span className="text-sm">Years Experience</span>
          </div>
        </div>
      </div>
    </main>
  );
}
