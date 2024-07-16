import Image from "next/image";
import { useRouter } from "next/router";
import LangSelect from "../LangSelect";
import Drawer from "../drawer";
import { FaFacebookF, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const router = useRouter();
  const isPathActive = (path) => {
    return router.pathname === path;
  };

  return (
    <div className="w-full bg-[#15464b] flex flex-col text-white text-sm">
      <div className="w-full max-sm:hidden h-10 border-gray-500 border-b-[0.05rem] flex flex-row justify-between items-center px-12 ">
        <span>Call us : (0281) 777 1975</span>
        <span>Open hour : Mon - Fri, 09.00 - 17.00</span>
        <span className="flex flex-row gap-4 justify-center items-center">
          <LangSelect />
          <span>Follow us :</span>
          <span className="flex flex-row gap-2">
            <FaFacebookF />
            <FaXTwitter />
            <FaYoutube />
            <FaLinkedin />
          </span>
        </span>
      </div>
      <div className="flex flex-row justify-between items-center px-12 py-6 max-sm:px-6">
        <span className="text-2xl max-sm:text-xl hover:scale-110 ease-in-out duration-300">
          FAJARJAYA
        </span>
        <ul className="flex flex-row space-x-16 max-sm:hidden">
          <li
            onClick={() => router.push("/")}
            className={`hover:cursor-pointer hover:text-[#32bab3] tracking-wider ${
              isPathActive("/") ? "font-bold text-[#32bab3]" : ""
            }`}
          >
            HOME
          </li>
          <li
            onClick={() => router.push("/company")}
            className={`hover:cursor-pointer hover:text-[#32bab3] tracking-wider ${
              isPathActive("/company") ? "font-bold text-[#32bab3]" : ""
            }`}
          >
            COMPANY
          </li>
          <li
            onClick={() => router.push("/products")}
            className={`hover:cursor-pointer hover:text-[#32bab3] tracking-wider ${
              isPathActive("/products") ? "font-bold text-[#32bab3]" : ""
            }`}
          >
            PRODUCTS
          </li>
          <li
            onClick={() => router.push("/services")}
            className={`hover:cursor-pointer hover:text-[#32bab3] tracking-wider ${
              isPathActive("/services") ? "font-bold text-[#32bab3]" : ""
            }`}
          >
            SERVICES
          </li>
        </ul>
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-row gap-2 items-center">
            <FaPhoneAlt />
            LET`S TALK
          </div>
          <Drawer />
        </div>
      </div>
    </div>
  );
}
