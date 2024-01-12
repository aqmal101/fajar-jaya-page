import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function OurSkillsTwo() {
  const SkillList = [
    { percent: 90, skill: "Linnen Outter" },
    { percent: 85, skill: "Textile Material" },
    { percent: 92, skill: "White Blazer" },
    { percent: 87, skill: "White Outfit" },
  ];
  return (
    <div className="w-full h-[1000px] max-sm:h-fit flex flex-row max-sm:flex-col px-12 max-sm:px-6">
      <div className="w-[45%] max-sm:w-full bg-blue-500 max-sm:text-center translate-y-[-30px]"></div>
      <div className="w-[55%] max-sm:w-full bg-white flex flex-col items-center text-sm px-16 max-sm:px-4 py-20 space-y-20">
        <div className="w-full flex flex-col text-left max-sm:text-center max-sm:items-center items-start space-y-6">
          <span className="text-[#da844a] max-sm:text-sm text-lg tracking-[0.3rem]">
            OUR SKILLS
          </span>
          <span className="text-5xl max-sm:text-4xl w-full leading-tight">
            Enhancing Your Inner Beauty
          </span>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-20 max-sm:gap-7">
          {SkillList.map((item, idx) => (
            <div
              id={item}
              key={idx}
              className="flex flex-col justify-center items-center text-center space-y-4"
            >
              <div className="w-36 h-36 max-sm:w-32 max-sm:h-32 flex justify-center items-center">
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
                      stroke: "#fff",
                      strokeLinecap: "butt",
                    },
                    text: {
                      fill: "#000",
                      fontSize: "20px",
                      fontWeight: "600",
                    },
                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                />
              </div>
              <p className="text-lg font-semibold tracking-widest">
                {item.skill}
              </p>
              <p className="text-gray-500 text-[17px]">
                Integer pharetra lobortis mauris, nec feugiat felis.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
