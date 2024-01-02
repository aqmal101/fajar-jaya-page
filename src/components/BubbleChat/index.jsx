import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function BubbleChat() {
  return (
    <div className="bg-[#141414] p-3 z-100 rounded-full border-2 border-green-500 flex justify-center items-center text-green-500 fixed bottom-10 right-10 hover:scale-110 duration-300 ease-in-out">
      <FaWhatsapp size={40} />
    </div>
  );
}
