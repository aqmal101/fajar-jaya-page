import Image from "next/image";
import Navbar from "@/components/navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/footer";
import Quality from "@/components/QualitySection";
import HowWeWork from "@/components/HowWeWork";
import GetStarted from "@/components/GetStarted";
import OurTeam from "@/components/OurTeam";
import OurClient from "@/components/OurClient";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

export default function CompanyPage() {
  return (
    <main className="w-full ">
      <Navbar />
      <div className="h-96 w-full px-20 flex flex-col items-center bg-[#2a2f27] relative">
        <div className="h-[420px] w-calc bg-blue-700/50 absolute -bottom-10 flex flex-col items-center justify-center space-y-4">
          <p className="text-white text-6xl">About Us</p>
          <span> HOME ABOUT</span>
        </div>
      </div>
      <AboutUs />
      <Quality />
      <HowWeWork />
      <GetStarted />
      <OurTeam />
      <OurClient />
      <Footer />
    </main>
  );
}
