import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function OurSkills() {
  const SkillList = [
    { percent: 90, skill: "Linnen Outter" },
    { percent: 85, skill: "Textile Material" },
    { percent: 92, skill: "White Blazer" },
    { percent: 87, skill: "White Outfit" },
  ];
  return (
    <div className="w-full bg-[#2a2f27] flex flex-col items-center text-sm px-20 py-28 space-y-14">
      <div className="w-full items-center flex flex-col text-center space-y-6">
        <p className="text-[#da844a] text-lg tracking-widest">OUR SKILLS</p>
        <span className="text-5xl w-full leading-tight text-white">
          Enhancing Your Inner Beauty
        </span>
        <span className="text-lg w-[70%] text-white">
          Pellentesque dui diam, tincidunt sit amet ligula viverra, sodales
          spanharetra erat. Mauris quis nibh dictum, sodales justo.
        </span>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-8 text-white">
        {SkillList.map((item, idx) => (
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-36 h-36 flex justify-center items-center">
              <CircularProgressbar
                value={item.percent}
                text={`${item.percent}%`}
                styles={{
                  path: {
                    strokeWidth: 1,
                    stroke: `rgba(225,135,75,100)`,
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                  },
                  trail: {
                    strokeWidth: 1,
                    stroke: "#3d423a",
                    strokeLinecap: "butt",
                  },
                  text: {
                    fill: "#FFF",
                    fontSize: "20px",
                    fontWeight: "600",
                  },
                  background: {
                    fill: "#3e98c7",
                  },
                }}
              />
            </div>
            <p className="text-lg font-semibold">{item.skill}</p>
            <p>Integer pharetra lobortis mauris, nec feugiat felis.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
