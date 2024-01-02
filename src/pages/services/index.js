import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BubbleChat from "@/components/BubbleChat";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingPlan from "@/components/PricingPlan";
import Appointment from "@/components/Appointment";
import FAQSection from "@/components/FAQSection";
import OurService from "@/components/OurService";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

export default function ServicePage() {
  const router = useRouter();
  return (
    <main className="w-full relative">
      <Navbar />
      <div className="h-96 w-full px-20 flex flex-col items-center bg-[#2a2f27] relative">
        <div className="h-[420px] w-calc bg-purple-700/40 absolute -bottom-10 flex flex-col items-center justify-center space-y-4">
          <p className="text-white text-6xl">Our Services</p>
          <div className="w-fit flex flex-row space items-center justify-center space-x-5 text-white">
            <p
              onClick={() => router.push("/")}
              className="hover:cursor-pointer"
            >
              HOME
            </p>
            <FaArrowRight />
            <p>SERVICES</p>
          </div>
        </div>
      </div>
      <BubbleChat />
      <div className="w-full h-20 bg-white"></div>
      <OurService />
      <WhyChooseUs />
      <PricingPlan />
      <Appointment />
      <FAQSection />
      <Footer />
    </main>
  );
}
