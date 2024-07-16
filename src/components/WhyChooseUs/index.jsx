import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function WhyChooseUs() {
  return (
    <div className="w-full h-fit bg-white flex flex-row max-sm:flex-col items-center text-sm px-20 max-sm:px-6 py-20 max-sm:py-6 space-x-16 max-sm:space-x-0 max-sm:space-y-10">
      <div className="w-[45%] max-sm:w-full min-h-screen h-[1200px] max-sm:h-[400px] bg-[#15464b]"></div>
      <div className="w-1/2 max-sm:w-full items-center flex flex-col space-y-12 text-left">
        <div className="w-full flex flex-col text-left space-y-6">
          <span className="text-[#32bab3] text-lg max-sm:text-base tracking-widest">
            WHY CHOOSE US
          </span>
          <span className="text-5xl w-[70%] max-sm:w-full max-sm:text-4xl leading-tight ">
            Textiles That Are Feather-Light
          </span>
        </div>
        <div className="space-y-5">
          <div className="flex flex-col space-y-4">
            <span className="text-xl text-gray-500">01.</span>
            <span className="text-2xl max-sm:text-xl">Professional Advice</span>
            <span className="text-lg max-sm:text-base text-gray-500">
              Di Fajar Jaya, setiap item dirancang dan diproduksi secara
              internal, mulai dari prototipe hingga koleksi akhir. Tahapan ini
              memastikan setiap detail seragam klien kami terjaga
              konsistensinya, dari awal desain hingga tahap persetujuan akhir.
            </span>
          </div>
          <div className="w-full h-[2px] border bg-black-900" />
          <div className="flex flex-col space-y-4">
            <span className="text-xl text-gray-500">02.</span>
            <span className="text-2xl">Fitting</span>
            <span className="text-lg text-gray-500">
              Kami memahami bahwa fitting dan siluet modern adalah kunci untuk
              membedakan diri dari kompetitor. Oleh karena itu, kami menggunakan
              metode fitting utama yang telah terbukti efektif dan efisien dalam
              menghasilkan kepuasan pelanggan.
            </span>
          </div>
          <div className="w-full h-[2px] border bg-black-900" />
          <div className="flex flex-col space-y-4">
            <span className="text-xl text-gray-500">03.</span>
            <span className="text-2xl">Production</span>
            <span className="text-lg text-gray-500">
              Setelah fitting selesai dan setiap pengguna diukur, kami memulai
              produksi begitu menerima persetujuan tertulis. Persetujuan ini
              mencakup semua detail yang telah disepakati, mulai dari desain,
              warna, jenis pakaian, sampel, hingga ukuran.
            </span>
          </div>
          <div className="w-full h-[2px] border bg-black-900" />
          <div className="flex flex-col space-y-4">
            <span className="text-xl text-gray-500">04.</span>
            <span className="text-2xl">Service</span>
            <span className="text-lg text-gray-500">
              Di Fajar Jaya, kami memahami bahwa layanan purna jual bukanlah
              sekadar kata-kata, melainkan inti dari dedikasi kami. Kami
              membuktikan komitmen kami dalam menjaga hubungan baik dan
              berkelanjutan dengan klien kami sepanjang masa pakai seragam.
            </span>
          </div>
          <div className="w-full h-[2px] border bg-black-900" />
        </div>
      </div>
    </div>
  );
}
