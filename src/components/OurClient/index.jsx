import Image from "next/image";
import logo1 from "./good-well.png";
import logo2 from "./amble.png";
import logo3 from "./neospa.png";
import logo4 from "./drextel.png";
import logo5 from "./burton.png";
import logo6 from "./mevlana.png";
import logo7 from "./amelie.png";
import logo8 from "./strana.png";
export default function OurClient() {
  const LogoList = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  return (
    <div className="w-full bg-[#231f20] flex flex-col justify-between space-y-10 items-center py-24 px-12">
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
