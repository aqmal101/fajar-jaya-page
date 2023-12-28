import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import OurClient from "@/components/OurClient";
import OurService from "@/components/OurService";
import OurProject from "@/components/OurProject";
import OurSkills from "@/components/OurSkills";
import HowWeWork from "@/components/HowWeWork";
import GetStarted from "@/components/GetStarted";
import BlogNews from "@/components/BlogNews";
import AboutUs from "@/components/AboutUs";
import Quality from "@/components/QualitySection";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="w-full ">
      <Navbar />
      <div className="h-screen px-24 flex flex-row bg-[#2a2f27] ">
        <div className="h-full flex w-1/2 pr-20 pl-12 flex-col justify-center items-start space-y-6">
          <h2 className="text-[#da844a]">WELCOME TO TEXTILN</h2>
          <h1 className="text-[60px] text-white">
            Do Well, Live Well & Dress Really Well
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
          </p>
          <div className="flex flex-row items-center space-x-5">
            <span className="w-fit text-sm px-8 py-3 border bg-transparent text-white border-gray-500 hover:cursor-pointer hover:border-[#da844a] hover:bg-[#da844a] hover:text-white transition-all ease-in-out duration-300">
              GET STARTED
            </span>
            <span className="flex flex-row space-x-3 items-center text-[14px] text-[#da844a] hover:text-white hover:cursor-pointer transition-all duration-300 ease-in-out">
              <p>READ MORE</p>
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div className="h-full bg-purple-800 w-1/2 relative">
          <div className="h-24 w-52 bg-white absolute top-20 -right-10 flex flex-row p-2 justify-around items-center">
            <FaCheckCircle className="text-5xl text-[#da844a]" />
            <span className="text-sm space-y-2">
              <span className="text-2xl">2,500 +</span>
              <p className="text-gray-500 text-lg">Total Project</p>
            </span>
          </div>
          <div className="h-[74px] w-52 bg-white absolute bottom-20 -left-10 flex flex-row p-3 justify-around items-center">
            <span className="text-5xl">4.9</span>
            <span className="text-sm space-y-2">
              <span className="flex flex-row text-yellow-500">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </span>
              <p className="text-gray-500">2000+ reviews</p>
            </span>
          </div>
        </div>
      </div>
      <OurClient />
      <OurService />
      <Quality />
      <OurSkills />
      <OurProject />
      <HowWeWork />
      <AboutUs />
      <BlogNews />
      <GetStarted />
      <Footer />
    </main>
  );
}
