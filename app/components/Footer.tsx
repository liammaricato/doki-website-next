import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row gap-10 justify-between items-center bg-white text-black px-8 sm:px-[5%] lg:px-[10%] xl:px-40 py-8">
      <div className="w-full sm:w-1/2 lg:w-1/3 h-full flex justify-center items-center">
        <img src="main_logo.png" alt="Logo Doki" className="w-5/6 max-w-[20rem]"/>
      </div>
      <div className="w-full sm:w-1/2 lg:w-2/3 flex flex-col gap-8 lg:flex-row lg:gap-4">
        <div className="flex-1 flex flex-col items-start gap-4">
          <h3 className="font-black text-l">CONTATO</h3>
          <p className="text-l">Deseja trabalhar com a Doki Live?</p>
          <Link
            className="py-3 px-6 text-l font-black bg-pink text-white w-auto rounded-full"
            href="mailto:dokilivecontato@gmail.com"
          >
            Entrar em contato
          </Link>
        </div>
        <div className="flex-1 flex flex-col gap-4 lg:p-8">
          <div className="flex gap-4">
            <a href="https://www.instagram.com/dokiliveoficial_/" target="_blank">
              <FaInstagram color="#FF6BAA" className="w-8 h-8" />
            </a>
            <a href="https://x.com/DokiLiveOficial" target="_blank">
              <FaXTwitter color="#FF6BAA" className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com/@DokiLiveProject" target="_blank">
              <FaYoutube color="#FF6BAA" className="w-8 h-8" />
            </a>
            <a href="https://www.tiktok.com/@puriteaproject" target="_blank">
              <FaTiktok color="#FF6BAA" className="w-8 h-8" />
            </a>
          </div>
          <p className="text-l">© 2025 Doki Live.</p>
        </div>
      </div>
    </footer>
  );
}
