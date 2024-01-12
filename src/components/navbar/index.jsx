import Image from "next/image";
import { useRouter } from "next/router";
import LangSelect from "../LangSelect";
import { FaFacebookF, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const router = useRouter();
  const isPathActive = (path) => {
    return router.pathname === path;
  };

  return (
    <div className="w-full bg-[#2a2f27] flex flex-col text-white text-sm">
      <div className="w-full max-sm:hidden h-10 border-gray-500 border-b-[0.05rem] flex flex-row justify-between items-center px-12 ">
        <span>Call us : +62 3456 789 1011</span>
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
            className={`hover:cursor-pointer hover:text-[#da844a] tracking-wider ${
              isPathActive("/") ? "font-bold text-[#da844a]" : ""
            }`}
          >
            HOME
          </li>
          <li
            onClick={() => router.push("/company")}
            className={`hover:cursor-pointer hover:text-[#da844a] tracking-wider ${
              isPathActive("/company") ? "font-bold text-[#da844a]" : ""
            }`}
          >
            COMPANY
          </li>
          <li
            onClick={() => router.push("/products")}
            className={`hover:cursor-pointer hover:text-[#da844a] tracking-wider ${
              isPathActive("/products") ? "font-bold text-[#da844a]" : ""
            }`}
          >
            PRODUCTS
          </li>
          <li
            onClick={() => router.push("/services")}
            className={`hover:cursor-pointer hover:text-[#da844a] tracking-wider ${
              isPathActive("/services") ? "font-bold text-[#da844a]" : ""
            }`}
          >
            SERVICES
          </li>
        </ul>
        <span className="flex flex-row gap-2 items-center">
          <FaPhoneAlt />
          LET`S TALK
        </span>
      </div>
    </div>
  );
}
