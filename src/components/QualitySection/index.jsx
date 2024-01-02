import Image from "next/image";
import { GiSewingString } from "react-icons/gi";

export default function QualitySection() {
  const QualityList = [
    {
      name: "PERFECT QUALITY",
      desc: "We strive to achive high standards in each and every product and service of our own",
      bg: "bg-[#2a2f27]",
    },
    {
      name: "BEST RAW MATERIALS",
      desc: "Good material is one of the key to create high quality products.",
      bg: "bg-[#141414]",
    },
    {
      name: "MODERN STYLE",
      desc: "We innovate and continously create new designs and fashions to become a trend setter.",
      bg: "bg-[#2a2f27]",
    },
    {
      name: "COMFORT",
      desc: "Comfortness and simplicity are two key features that follows in fashion bussiness",
      bg: "bg-[#141414]",
    },
  ];

  const ProjectList = [
    { number: "500", text: "project" },
    { number: "327", text: "happy clients" },
    { number: "100", text: "employees" },
    { number: "327", text: "happy clients" },
  ];

  return (
    <div className="w-full h-fit bg-[#2a2f27] flex flex-col justify-between items-center">
      <div className="w-full h-1/2 grid grid-rows-1 grid-cols-4">
        {QualityList.map((item, idx) => (
          <div
            className={`w-full h-[320px] ${item.bg} text-white group hover:bg-white flex flex-col items-center justify-between transition-all duration-300 ease-out p-10`}
          >
            <div className="text-[#da844a] text-5xl flex justify-center items-center h-20 w-20 bg-[#da844a] group-hover:translate-y-[-10px] transition-300 duration-300 ease-in-out"></div>
            <span className="text-xl group-hover:text-black ">{item.name}</span>
            <span className="text-center group-hover:text-gray-500 text-gray-400">
              {item.desc}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full h-1/2 flex flex-row justify-center py-16 items-center space-x-16">
        {ProjectList.map((item, idx) => (
          <div
            className="flex flex-row h-14 w-60  justify-center items-end space-x-4"
            id={idx}
          >
            <p className="text-6xl font-bold text-white">{item.number}</p>
            <span className="w-1 h-full flex items-center">
              <span className="w-[3px] h-12 bg-[#da844a]"></span>
            </span>
            <p className="font-semibold uppercase text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
