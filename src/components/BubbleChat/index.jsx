import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function BubbleChat() {
  return (
    <div className="bg-[#231f20] p-3 z-200 rounded-full border-2 border-green-500 flex justify-center items-center text-green-500 fixed bottom-10 right-10 max-sm:bottom-5 max-sm:right-5 hover:scale-110 duration-300 ease-in-out">
      <FaWhatsapp size={40} className="max-sm:w-6 max-sm:h-6" />
    </div>
  );
}
