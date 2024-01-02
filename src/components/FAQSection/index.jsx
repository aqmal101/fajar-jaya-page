import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";

export default function FAQSection() {
  const QuestOneList = [
    "What types of fabrics do you have now? ",
    "Can you produce certain types of fabrics? ",
    "How long does the dyeing process take? ",
    "What payment methods do you provide?",
  ];
  const QuestTwoList = [
    "What types of fabrics do you have now? ",
    "Can you produce certain types of fabrics? ",
    "How long does the dyeing process take? ",
    "What payment methods do you provide?",
  ];
  return (
    <div className="w-full h-fit bg-white flex flex-col items-center text-sm px-20 py-20 space-y-16">
      <div className="w-full flex flex-col text-center space-y-6">
        <span className="text-[#da844a] text-lg tracking-widest font-semibold">
          FAQS
        </span>
        <span className="text-5xl w-full leading-tight text-black">
          Frequently Asked Questions
        </span>
      </div>
      <div className="w-full flex flex-row mx-auto my-20 drop-shadow space-x-5 rounded-md">
        <div className="w-full space-y-5">
          {QuestOneList.map((item, idx) => (
            <details className="w-full z-10 bg-white border border-gray-300 open:bg-gray-800 open:text-white duration-500 transition-all ease-in-out">
              <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
                {item}
              </summary>
              <div className="bg-white px-5 py-3 border text-sm font-light text-black">
                <p className="text-base text-gray-600">
                  Praesent posuere nisi vel diam congue varius. Praesent lacus
                  nulla, congue nec rhoncus nec, suscipit et enim. Donec
                  ultrices nec arcu et pharetra.
                </p>
              </div>
            </details>
          ))}
        </div>
        <div className="w-full space-y-5">
          {QuestTwoList.map((item, idx) => (
            <details className="w-full z-10 bg-white border border-gray-300 open:bg-gray-800 open:text-white duration-500 transition-all ease-in-out">
              <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
                The first requently asked question
              </summary>
              <div className="bg-white px-5 py-3 border text-sm font-light text-black">
                <p className="text-base text-gray-600">
                  Praesent posuere nisi vel diam congue varius. Praesent lacus
                  nulla, congue nec rhoncus nec, suscipit et enim. Donec
                  ultrices nec arcu et pharetra.
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
