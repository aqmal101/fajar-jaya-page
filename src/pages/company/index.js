import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/footer";
import Quality from "@/components/QualitySection";
import HowWeWork from "@/components/HowWeWork";
import GetStarted from "@/components/GetStarted";
import OurTeam from "@/components/OurTeam";
import OurThree from "@/components/OurThree";
import OurClient from "@/components/OurClient";
import Achievement from "@/components/Achievement";
import OurSkills from "@/components/OurSkills/OurSkillsTwo";
import BubbleChat from "@/components/BubbleChat";
import { FaArrowRight } from "react-icons/fa";

export default function CompanyPage() {
  const router = useRouter();
  return (
    <main className="w-full relative">
      <Navbar />
      <div className="h-96 w-full px-20 max-sm:px-6 flex flex-col items-center bg-[#2a2f27] relative">
        <div className="h-[420px] w-calc max-sm:w-smcalc bg-purple-700/40 absolute -bottom-10 flex flex-col items-center justify-center space-y-4">
          <p className="text-white text-6xl max-sm:text-4xl">About Us</p>
          <div className="w-fit flex flex-row space items-center max-sm:text-sm justify-center space-x-5 text-white">
            <p
              onClick={() => router.push("/")}
              className="hover:cursor-pointer"
            >
              HOME
            </p>
            <FaArrowRight />
            <p>ABOUT</p>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-white"></div>
      <AboutUs />
      <Achievement />
      <OurSkills />
      <OurThree />
      <Quality />
      <HowWeWork />
      <GetStarted />
      <OurTeam />
      <OurClient />
      <BubbleChat />
      <Footer />
    </main>
  );
}
