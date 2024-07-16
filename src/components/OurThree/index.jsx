import Image from "next/image";
import { FaRegEye, FaRegStar } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

export default function OurThree() {
  const PlanList = [
    { class: "Basic Package", amount: "240", cardHeight: "h-[500px]" },
    { class: "Regular Package", amount: "320", cardHeight: "h-[560px]" },
    { class: "Duluxe Package", amount: "450", cardHeight: "h-[500px]" },
  ];
  return (
    <>
      <div className="w-full h-20 bg-white"></div>
      <div className="w-full h-fit grid grid-cols-3 max-sm:grid-cols-1 grid-rows-2 px-12 max-sm:px-3">
        <div className="w-full h-[320px] bg-white group hover:bg-[#15464b] flex flex-col items-center justify-between transition-all duration-300 ease-out p-10">
          <div className="text-[#32bab3] text-5xl flex justify-center items-center group-hover:translate-y-[-10px] transition-300 duration-300 ease-in-out">
            <FaRegEye />
          </div>
          <span className="text-2xl group-hover:text-white">Our Vision</span>
          <span className="text-center text-gray-500 group-hover:text-white">
            Menjadi pemimpin pasar dalam industri garmen di Indonesia yang
            berlandaskan teknologi tinggi dan layanan prima, dengan menjunjung
            tinggi nilai-nilai syariat Islam.
          </span>
          <span className="text-[#32bab3] text-sm underline underline-offset-4 group-hover:text-white">
            LEARN MORE
          </span>
        </div>

        <div className="w-full h-[320px] bg-blue-500"></div>
        <div className="w-full h-[320px] bg-white group hover:bg-[#15464b] flex flex-col items-center justify-between transition-all duration-300 ease-out p-10">
          <div className="text-[#32bab3] text-5xl flex justify-center items-center group-hover:translate-y-[-10px] transition-300 duration-300 ease-in-out">
            <FaRegStar />
          </div>
          <span className="text-2xl group-hover:text-white">Our Mission</span>
          <span className="text-center text-gray-500  group-hover:text-white">
            Menjalankan Bisnis Sesuai Syariat Islam, Menjalankan Bisnis Sesuai
            Syariat Islam, dan Memberikan Dampak Positif
          </span>
          <span className="text-[#32bab3] text-sm underline underline-offset-4 group-hover:text-white">
            LEARN MORE
          </span>
        </div>
        <div className="w-full h-[320px] bg-blue-500"></div>
        <div className="w-full h-[320px] bg-white group hover:bg-[#15464b] flex flex-col items-center justify-between transition-all duration-300 ease-out p-10">
          <div className="text-[#32bab3] text-5xl flex justify-center items-center group-hover:translate-y-[-10px] transition-300 duration-300 ease-in-out">
            <IoDiamondOutline />
          </div>
          <span className="text-2xl group-hover:text-white">Our Services</span>
          <span className="text-center text-gray-500 group-hover:text-white">
            Fajar Jaya menjawab kebutuhan Anda dengan kualitas terbaik dan harga
            yang kompetitif. Bersama kami, Anda mendapatkan seragam yang tidak
            hanya memenuhi standar, tetapi juga meningkatkan citra Anda.
          </span>
          <span className="text-[#32bab3] text-sm underline underline-offset-4 group-hover:text-white">
            LEARN MORE
          </span>
        </div>
        <div className="w-full h-[320px] bg-blue-500"></div>
      </div>
      <div className="w-full h-20 bg-white"></div>
    </>
  );
}
