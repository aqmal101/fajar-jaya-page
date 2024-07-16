import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { PiChatsCircle } from "react-icons/pi";

export default function Appointment() {
  const PlanList = [
    { class: "Basic Package", amount: "240", cardHeight: "h-[500px]" },
    { class: "Regular Package", amount: "320", cardHeight: "h-[560px]" },
    { class: "Duluxe Package", amount: "450", cardHeight: "h-[500px]" },
  ];
  return (
    <div className="w-full h-fit bg-white flex flex-row max-sm:flex-col items-center text-sm py-20 space-y-16">
      <div className="w-1/2 max-sm:w-full flex flex-col text-center space-y-10 px-16 max-sm:px-6">
        <div className="w-full flex flex-col text-left space-y-6">
          <span className="text-[#32bab3] text-lg tracking-widest">
            APPOINTMENT
          </span>
          <span className="text-5xl w-[70%] leading-tight">
            Let`s Talk About Textile
          </span>
        </div>
        <div className="w-full  flex flex-col space-y-7">
          <input
            type="text"
            className="w-full h-12 border border-gray-300 px-4 placeholder-gray-700"
            placeholder="Your Name"
          />
          <div className="flex flex-row h-12 justify-between space-x-5">
            <input
              type="text"
              className="w-full border border-gray-300 px-4 placeholder-gray-700"
              placeholder="Phone"
            />
            <input
              type="text"
              className="w-full border border-gray-300 px-4 placeholder-gray-700"
              placeholder="Email"
            />
          </div>

          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-transparent active:ring-transparent focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose Service</option>
            <option value="US">Production</option>
            <option value="CA">Pattern</option>
            <option value="FR">Sewing</option>
          </select>

          <textarea
            cols="30"
            rows="10"
            className=" border border-gray-300 p-4 placeholder-gray-700"
            placeholder="Message"
          ></textarea>
          <span className="w-fit bg-[#32bab3] text-sm text-white font-semibold px-9 py-4 border border-[#32bab3] hover:cursor-pointer hover:border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300">
            SUBMIT FORM
          </span>
        </div>
      </div>
      <div className="w-1/2 max-sm:w-full h-[800px] max-sm:h-[600px] bg-[#324162] text-white flex flex-col justify-end space-y-5 p-20 max-sm:p-6 items-center">
        <span className="w-full h-48 flex flex-col justify-center items-start p-5 space-y-5 border border-gray-500 hover:border-white ">
          <div className="w-10 h-10 rounded-full flex justify-center items-center text-[#32bab3]">
            <PiChatsCircle size={60} />
          </div>
          <p className="text-2xl">FAQs Page</p>
          <p>Lorem ipsum dolor sit amet, adipi.</p>
        </span>
        <span className="w-full h-48 flex flex-col justify-center items-start p-5 space-y-5 border border-gray-500 hover:border-white ">
          <div className="w-10 h-10 rounded-full flex justify-center items-center text-[#32bab3]">
            <FaPhoneAlt size={30} />
          </div>
          <p className="text-2xl">24/7 Support</p>
          <p>Lorem ipsum dolor sit amet, adipi.</p>
        </span>
      </div>
    </div>
  );
}
