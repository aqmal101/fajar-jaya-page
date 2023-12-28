import Image from "next/image";

export default function QualitySection() {
  const ProjectList = [
    { number: "500", text: "project" },
    { number: "327", text: "happy clients" },
    { number: "100", text: "employees" },
    { number: "327", text: "happy clients" },
  ];

  return (
    <div className="w-full max-h-screen bg-[#2a2f27] flex flex-col justify-between items-center py-20">
      <div className="w-full h-1/2 flex flex-row"></div>
      <div className="w-full h-1/2 flex flex-row justify-center items-center space-x-16">
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
