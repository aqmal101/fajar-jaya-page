import Image from "next/image";
import { useRouter } from "next/router";
import { FaFacebookF, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="w-full bg-[#2a2f27] flex flex-col text-white text-sm">
      <div className="w-full h-10 border-gray-500 border-b-[0.05rem] flex flex-row justify-between items-center px-12">
        <span>Call us : +62 3456 789 1011</span>
        <span>Open hour : Mon - Fri, 09.00 - 17.00</span>
        <span className="flex flex-row gap-2 justify-center items-center">
          <span>Follow us :</span>
          <span className="flex flex-row gap-2">
            <FaFacebookF />
            <FaXTwitter />
            <FaYoutube />
            <FaLinkedin />
          </span>
        </span>
      </div>
      <div className="flex flex-row justify-between items-center px-12 py-6">
        <span className="text-2xl hover:scale-110 ease-in-out duration-300">
          FAJARJAYA
        </span>
        <ul className="flex flex-row space-x-16">
          <li onClick={() => router.push("/")}>HOME</li>
          <li onClick={() => router.push("/company")}>COMPANY</li>
          <li onClick={() => router.push("/product")}>PRODUCT</li>
          <li onClick={() => router.push("/service")}>SERVICE</li>
        </ul>
        <span className="flex flex-row gap-2 items-center">
          <FaPhoneAlt />
          LET'S TALK
        </span>
      </div>
    </div>
  );
}
