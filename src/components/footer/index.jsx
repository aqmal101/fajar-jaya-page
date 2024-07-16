import Image from "next/image";
import { FaFacebookF, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const LogoList = [
    { id: 1, icon: <FaFacebookF /> },
    { id: 2, icon: <FaYoutube /> },
    { id: 3, icon: <FaLinkedin /> },
    { id: 4, icon: <FaXTwitter /> },
  ];
  return (
    <div className="w-full max-sm:h-fit bg-[#231f20] flex flex-col-reverse text-white text-sm px-12 max-sm:px-7">
      <div className="w-full h-16 max-sm:h-20 max-sm:space-y-4 max-sm:py-2 border-gray-500 border-t-[0.05rem] flex flex-row justify-between items-center max-sm:flex-col-reverse">
        <span>Copyright © 2023 Fajar Jaya</span>
        <span className="flex flex-row gap-5 justify-center items-center">
          <span>Privacy Policy</span>
          <span>Terms & Services</span>
        </span>
      </div>
      <div className="max-sm:w-full flex flex-row max-sm:flex-col justify-between items-center py-16">
        <div className="w-[30%] max-sm:w-full flex flex-col justify-left max-sm:justify-center max-sm:text-center space-y-10 ">
          <span className="text-3xl">FAJARJAYA</span>
          <span className="text-base">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nullam in
            nibh vehicula. Nullaeget massa velit.
          </span>
          <span className="flex flex-row gap-6 max-sm:gap-4">
            {LogoList.map((item, idx) => (
              <span
                className="flex flex-row p-2 rounded-full border-[1px] border-gray-400 hover:border-white hover:bg-white hover:text-[#32bab3] hover:cursor-pointer"
                id={item.id}
                key={idx}
              >
                {item.icon}
              </span>
            ))}
          </span>
        </div>
        <div className="flex flex-row max-sm:flex-col w-[50%] max-sm:w-full justify-between max-sm:space-y-5">
          <div className="flex flex-col space-y-5">
            <span className="flex flex-col space-y-5">
              <span className="text-2xl">Visit Us</span>
              <span className="w-[70%]">Jl. K.S. Tubun No.4, Purwokerto </span>
              <span>07.00 AM - 19.00 PM</span>
            </span>
            <span className="space-y-5">
              <p className="text-2xl">Contact Us</p>
              <p>+(0281) 777 1975</p>
              <p>cvfajarjaya@gmail.com</p>
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
