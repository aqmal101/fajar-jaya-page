import Image from "next/image";
import { GiSewingString } from "react-icons/gi";

export default function QualitySection() {
  const QualityList = [
    {
      id: 1,
      name: "PERFECT QUALITY",
      desc: "We strive to achive high standards in each and every product and service of our own",
      bg: "bg-[#2a2f27]",
    },
    {
      id: 2,
      name: "BEST RAW MATERIALS",
      desc: "Good material is one of the key to create high quality products.",
      bg: "bg-[#2a2f27]",
    },
    {
      id: 3,
      name: "MODERN STYLE",
      desc: "We innovate and continously create new designs and fashions to become a trend setter.",
      bg: "bg-[#2a2f27]",
    },
    {
      id: 4,
      name: "COMFORT",
      desc: "Comfortness and simplicity are two key features that follows in fashion bussiness",
      bg: "bg-[#2a2f27]",
    },
  ];

  const ProjectList = [
    { id: 1, number: "500", text: "project" },
    { id: 2, number: "327", text: "happy clients" },
    { id: 3, number: "100", text: "employees" },
    { id: 4, number: "327", text: "happy clients" },
  ];

  return (
    <div className="w-full h-fit bg-[#2a2f27] flex flex-col justify-between items-center max-sm:space-x-0">
      <div className="w-full h-1/2 grid grid-rows-1 grid-cols-4 max-sm:grid-cols-2 max-sm:grid-rows-2">
        {QualityList.map((item, idx) => (
          <div
            id={idx}
            key={item.id}
            className={`w-full h-[320px] ${item.bg} text-white group hover:bg-white flex flex-col items-center justify-between transition-all duration-300 ease-out p-10 max-sm:px-4 max-sm:justify-center max-sm:space-y-4`}
          >
            <div className="text-[#da844a] text-5xl flex justify-center items-center h-20 max-sm:h-10 w-20 max-sm:w-10 bg-[#da844a] group-hover:translate-y-[-10px] transition-300 duration-300 ease-in-out"></div>
            <span className="text-xl group-hover:text-black max-sm:text-center">
              {item.name}
            </span>
            <span className="text-center max-sm:text-sm group-hover:text-gray-500 text-gray-400">
              {item.desc}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full max-sm:grid max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:gap-2 h-1/2 flex flex-row justify-center py-16 items-center space-x-16 max-sm:space-x-0">
        {ProjectList.map((item, idx) => (
          <div
            className="flex flex-row max-sm:flex-col h-14 w-60 max-sm:w-36 max-sm:h-24 justify-center items-end space-x-4 max-sm:space-x-0"
            id={idx}
            key={item.id}
          >
            <p className="text-6xl max-sm:text-3xl font-bold text-white">
              {item.number}
            </p>
            <span className="w-1 h-full flex items-center max-sm:hidden">
              <span className="w-[3px] h-12 bg-[#da844a]"></span>
            </span>
            <span className="h-2 w-full max-sm:flex items-center">
              <span className="w-2 h-12 bg-[#da844a]"></span>
            </span>
            <p className="font-semibold max-sm:text-sm uppercase text-white">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
