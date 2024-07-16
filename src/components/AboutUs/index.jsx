import Image from "next/image";
import { FaFacebookF, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { IoMdPin } from "react-icons/io";

export default function About() {
  return (
    <main className="w-full ">
      <div className="h-[900px] max-sm:bg-yellow-500 max-sm:hidden px-16 flex flex-row-reverse justify-between items-center">
        <div className="h-full flex w-1/2 px-16 py-20 flex-col justify-center space-y-8 bg-white">
          <h2 className="text-[#32bab3] font-semibold tracking-widest text-lg">
            ABOUT US
          </h2>
          <h1 className="text-5xl leading-relaxed text-black">
            Do Well, Live Well & Dress Really Well
          </h1>
          <p className="text-black">
            Fajar Jaya adalah perusahaan garmen terintegrasi yang berdiri sejak
            1957 danterkenal akan profesionalisme serta dedikasinya.
            Bertransformasi menjadi industri modern pada 2018, kami
            mengoperasikan lebih dari 300 mesincanggih dengan tenaga kerja ahli.
            Kami fokus menghasilkan seragam kedinasan dan pakaian formal
            berkualitas tinggi untuk pasar global. Di tangangenerasi ketiga,
            Fajar Jaya terus berinovasi, menjamin setiap produk dikerjakan
            dengan presisi dan keunggulan, menjadikan kami mitra
            pilihanperusahaan terkemuka.
          </p>
          <div className="flex h-auto flex-row items-start space-x-10">
            <span className="text-[14px] space-y-4">
              <div className="w-10 h-10 bg-gray-400/20 p-1 flex flex-col items-center justify-center">
                <IoMdPin className="w-8 h-8 text-[#32bab3]" />
              </div>
              <p className="text-lg">Visit Us</p>
              <p>Jl. K.S. Tubun No. 4, Purwokerto</p>
            </span>
            <span className="text-[14px] space-y-4">
              <div className="w-10 h-10 bg-gray-400/20 p-1 flex flex-col items-center justify-center">
                <FaPhoneAlt className="w-6 h-6 text-[#32bab3] " />
              </div>
              <p className="text-lg">Contact </p>
              <p>cvfajarjaya@gmail.com</p>
              <p>(0281) 777 1975</p>
            </span>
          </div>
          <span className="w-fit text-sm px-8 py-3 border bg-white border-gray-500 hover:cursor-pointer hover:border-[#32bab3] hover:bg-[#32bab3] hover:text-white transition-all ease-in-out duration-300">
            LEARN MORE
          </span>
        </div>
        <div className="h-[90%] bg-[#15464b] w-[45%] relative">
          <div className="h-32 w-40 bg-white absolute bottom-6 left-6 flex flex-col p-3 justify-around items-center">
            <span className="text-5xl">25+</span>
            <span className="text-sm">Years Experience</span>
          </div>
        </div>
      </div>
    </main>
  );
}
