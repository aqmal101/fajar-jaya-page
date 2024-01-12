import Image from "next/image";
import logo1 from "@/assets/good-well.png";
import logo2 from "@/assets/amble.png";
import logo3 from "@/assets/neospa.png";
import logo4 from "@/assets/drextel.png";
import logo5 from "@/assets/burton.png";
import logo6 from "@/assets/mevlana.png";
import logo7 from "@/assets/amelie.png";
import logo8 from "@/assets/strana.png";
export default function OurClient() {
  const LogoList = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  return (
    <div className="w-full bg-[#141414] flex flex-col justify-between space-y-10 items-center py-24 px-12">
      <span className="text-white tracking-widest text-lg">
        Our Biggest Client
      </span>
      <div className="w-full bg-transparent grid grid-cols-4 gap-x-40 grid-rows-2 justify-center">
        {LogoList.map((item, idx) => (
          <Image
            src={item}
            key={idx}
            className="opacity-50 w-40 h-24 hover:opacity-100 transition-all duration-300 ease-in-out hover:cursor-pointer"
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
}
