import Image from "next/image";
import { FaFacebookF, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const LogoList = [
    <FaFacebookF />,
    <FaYoutube />,
    <FaLinkedin />,
    <FaXTwitter />,
  ];
  return (
    <div className="w-full bg-[#141414] flex flex-col-reverse text-white text-sm px-12">
      <div className="w-full h-16 border-gray-500 border-t-[0.05rem] flex flex-row justify-between items-center ">
        <span>Copyright © 2023 Fajar Jaya</span>
        <span className="flex flex-row gap-5 justify-center items-center">
          <span>Privacy Policy</span>
          <span>Terms & Services</span>
        </span>
      </div>
      <div className=" flex flex-row justify-between items-center py-16">
        <div className="w-[30%] flex flex-col justify-left space-y-10 ">
          <span className="text-3xl">FAJARJAYA</span>
          <span className="text-base">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nullam in
            nibh vehicula. Nullaeget massa velit.
          </span>
          <span className="flex flex-row gap-6">
            {LogoList.map((item, idx) => (
              <span
                className="flex flex-row p-2 rounded-full border-[1px] border-gray-400 hover:border-white hover:bg-white hover:text-[#da844a] hover:cursor-pointer"
                id={idx}
              >
                {item}
              </span>
            ))}
          </span>
        </div>
        <div className="flex flex-row w-[50%] justify-between">
          <div className="flex flex-col space-y-5">
            <span className="flex flex-col space-y-5">
              <span className="text-2xl">Visit Us</span>
              <span className="w-[70%]">457 Morningview Lane, New York</span>
              <span>07.00 AM - 19.00 PM</span>
            </span>
            <span className="space-y-5">
              <p className="text-2xl">Contact Us</p>
              <p>+1 (234) 567 890</p>
              <p>example@mail.com</p>
            </span>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-2xl">Explore</p>
            <ul className="space-y-3">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-2xl">Support</p>
            <ul className="space-y-3">
              <li>Help Center</li>
              <li>Career</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
