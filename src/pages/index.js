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
import WhyChooseUs from "@/components/WhyChooseUs";
import BubbleChat from "@/components/BubbleChat";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="w-full max-sm:w-screen max-sm:bg-purple-500">
      <Navbar />
      <div className="h-screen px-12 max-sm:px-6 flex justify-between flex-row max-sm:w-screen max-sm:flex-col bg-[#2a2f27] ">
        <div className="h-full max-sm:py-10 flex w-[35%] max-sm:w-full text-left flex-col justify-center items-start space-y-6">
          <h2 className="text-[#da844a] max-sm:text-sm font-semibold tracking-widest">
            WELCOME TO TEXTILN
          </h2>
          <h1 className="text-6xl max-sm:text-4xl leading-relaxed text-white">
            Do Well, Live Well & Dress Really Well
          </h1>
          <p className="text-white max-sm:text-sm">
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
        <div className="h-full bg-purple-800 w-1/2 max-sm:w-full relative translate-y-[40px] max-sm:translate-y-5">
          <div className="h-24 w-52 max-sm:hidden bg-white absolute top-20 -right-5 flex flex-row p-2 justify-around items-center">
            <FaCheckCircle className="text-5xl text-[#da844a]" />
            <span className="text-sm space-y-2">
              <span className="text-2xl">2,500 +</span>
              <p className="text-gray-500 text-lg">Total Project</p>
            </span>
          </div>
          <div className="h-[74px] max-sm:hidden w-52 bg-white absolute bottom-20 -left-10 flex flex-row p-3 justify-around items-center">
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
      <BubbleChat />
      <OurClient />
      <AboutUs />
      <Quality />
      <OurService />
      <OurSkills />
      <WhyChooseUs />
      <OurProject />
      <HowWeWork />
      <BlogNews />
      <GetStarted />
      <Footer />
    </main>
  );
}
