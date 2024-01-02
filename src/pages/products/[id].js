import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BubbleChat from "@/components/BubbleChat";
import GetStarted from "@/components/button/GetStarted/Second";
import DownloadPdf from "@/components/button/DownloadPdf";
import FAQSection from "@/components/FAQSection";
import { FaArrowRight } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

export default function ProductsPage() {
  const ServiceList = [
    "Nullam id diam commodo",
    "  Pellentesque sed lorem quis",
    "  Sed vel viverra erat",
    "  Etiam scelerisque aliquam",
    "  Nullam id diam commodo",
    "  Pellentesque sed lorem quis",
    "  Sed vel viverra erat",
    " Etiam scelerisque aliquam",
  ];
  const router = useRouter();
  return (
    <main className="w-full relative">
      <Navbar />
      <div className="h-96 w-full px-20 flex flex-col items-center bg-[#2a2f27] relative">
        <div className="h-[420px] w-calc bg-purple-700/40 absolute -bottom-10 flex flex-col items-center justify-center space-y-4">
          <p className="text-white text-6xl">Our Products</p>
          <div className="w-fit flex flex-row space items-center justify-center space-x-5 text-white">
            <p
              onClick={() => router.push("/")}
              className="hover:cursor-pointer"
            >
              HOME
            </p>
            <FaArrowRight />
            <p>PRODUCTS</p>
          </div>
        </div>
      </div>
      <BubbleChat />
      <div className="w-full h-28 bg-white"></div>
      <div className="w-full h-fit px-20 bg-white flex flex-row justify-between text-gray-600">
        <div className="w-[67%] h-full bg-white space-y-5">
          <h1 className="text-5xl text-black">Textile Production Service</h1>
          <p>
            Integer pharetra lobortis mauris, nec feugiat felis semper ac.
            Vestibulum posuere euismod condimentum. Ut laoreet, nibh a dapibus
            pulvinar, enim est bibendum metus, ut sollicitudin sem libero id
            nisi. Nulla bibendum turpis nisi, ut fermentum diam ultrices a.
            Morbi molestie, metus vel viverra feugiat, lorem turpis lobortis
            felis, sit amet maximus mi eros a erat. Aliquam congue ac justo vel
            dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="w-full h-[270px] flex flex-row justify-between space-x-5">
            <div className="w-1/2 h-full bg-blue-500"></div>
            <div className="w-1/2 h-full bg-blue-500"></div>
          </div>
          <h1 className="text-2xl text-black">Service Overview</h1>
          <p>
            Aliquam ac convallis neque. Fusce sit amet neque eu turpis tristique
            posuere eget eget nibh. Praesent ac mi quis nisl gravida ornare a
            commodo purus. Sed a dictum quam. Proin sit amet arcu ultricies,
            molestie enim sed, pretium velit. Sed non odio urna. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Aenean fermentum ullamcorper eros at dictum.
          </p>
          <h1 className="text-2xl text-black">Service Outline</h1>
          <p>
            Pellentesque dui diam, tincidunt sit amet ligula viverra, sodales
            pharetra erat. Mauris quis nibh dictum, scelerisque odio ac, sodales
            justo. Donec ultricies, nulla sit amet bibendum rutrum, metus elit
            sollicitudin est, ultrices accumsan metus justo sit amet lectus.
            Vivamus iaculis consequat elit, semper malesuada ipsum vestibulum
            sit amet.
          </p>
          <div className="grid grid-cols-2 grid-rows-4 gap-y-2">
            {ServiceList.map((item, index) => (
              <span className="flex flex-row space-x-2 items-center" id={index}>
                <IoCheckmark className="text-[#cf7539] text-xl" />
                <p>{item}</p>
              </span>
            ))}
          </div>
          <h1 className="text-2xl text-black">Include and Exclude</h1>
          <p>
            Duis varius aliquam augue, et vestibulum magna laoreet quis. Donec
            interdum feugiat mi, quis tristique sapien viverra sit amet. Aliquam
            blandit mauris nulla, ac euismod sem aliquet ac. Morbi ut ipsum ut
            enim suscipit volutpat non ac sapien.
          </p>
          <div className="grid grid-cols-2 grid-rows-4 gap-y-2">
            {ServiceList.map((item, index) => (
              <span className="flex flex-row space-x-2 items-center" id={index}>
                <IoCheckmark className="text-[#cf7539] text-xl" />
                <p>{item}</p>
              </span>
            ))}
          </div>
        </div>
        <div className="w-[27%] h-full bg-white space-y-5">
          <div className="w-full h-[300px] p-10 justify-between border border-gray-300 flex flex-col">
            <div className="w-full h-fit flex flex-row justify-start space-x-2 items-start">
              <span className="text-4xl">$39.00</span>
              <span className="text-sm text-[#da844a]">/SERVICE</span>
            </div>
            <span className="text-gray-500">
              Donec ac finibus massa, in commodo erat. Cras tristique eros elit.
            </span>
            <GetStarted />
          </div>
          <div className="w-full h-[300px] p-10 justify-between border border-gray-300 flex flex-col">
            <span className="text-2xl text-black">Download Brochure </span>
            <span className="text-gray-500">
              Donec ac finibus massa, in commodo erat. Cras tristique eros elit.
            </span>
            <DownloadPdf />
          </div>
          <div className="w-full h-[300px] p-10 bg-[#b45616] text-white justify-between border border-gray-300 flex flex-col">
            <span className="text-2xl text-white">Have any questions?</span>
            <span>
              Donec ac finibus massa, in com erat. Cras tristique eros elit.
            </span>
            <span>+1 234 567 890 </span>
            <span>example@mail.com</span>
          </div>
        </div>
      </div>
      <FAQSection />
      <Footer />
    </main>
  );
}
