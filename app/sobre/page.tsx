import Link from "next/link";
import Talentos from "../components/Talentos";
import Meninas from "../components/Meninas";

import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const runtime = "edge";

export default function Home() {
  return (
    <div>
      <Meninas />
      <div className="flex flex-col md:flex-row w-full justify-between align-center bg-white px-8 sm:px-20 py-12 sm:py-32 gap-20">
        <div className="flex-1 flex flex-col gap-10 items-start">
          <h1 id="quem-somos" className="font-black text-4xl">Quem somos</h1>
          <p className="text-xl">
            A Doki Live é um grupo de Vtubers dedicado a criar um ambiente
            acolhedor e apaixonante, onde o entretenimento se transforma em
            conexão genuína. Com cinco integrantes talentosas, levamos diversão,
            criatividade e inovação ao público, promovendo uma comunidade
            vibrante e inclusiva.
          </p>
          <div className="flex gap-4">
            <a href="" className="bg-pink rounded-full p-2 shadow-lg">
              <FaTwitch color="white" className="w-8 h-8" />
            </a>
            <a href="" className="bg-pink rounded-full p-2 shadow-lg">
              <FaYoutube color="white" className="w-8 h-8" />
            </a>
            <a href="" className="bg-pink rounded-full p-2 shadow-lg">
              <FaInstagram color="white" className="w-8 h-8" />
            </a>
            <a href="" className="bg-pink rounded-full p-2 shadow-lg">
              <FaXTwitter color="white" className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="flex-1 relative min-h-[30rem]">
          <img
            src="/polaroid.png"
            alt="Polaroid das meninas da Doki"
            id="polaroid1"
            className="polaroid absolute top-1/2 left-1/2 w-56 sm:w-72 md:w-56 lg:w-72"
          />
          <img
            src="/polaroid.png"
            alt="Polaroid das meninas da Doki"
            id="polaroid2"
            className="polaroid absolute top-1/2 left-1/2 w-56 sm:w-72 md:w-56 lg:w-72"
          />
        </div>
      </div>
      <div className="bg-yellow w-full p-8 sm:p-20">
        <h1 id="talentos" className="text-4xl text-white font-black">
          Talentos
        </h1>
        <Talentos color="yellow"/>
      </div>
    </div>
  );
}
