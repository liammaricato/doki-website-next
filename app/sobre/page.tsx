import Link from "next/link";
import Talentos from "../components/Talentos";
import Meninas from "../components/MeninasCarousel";
import Valores from "../components/Valores";

import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const runtime = "edge";

export default function Home() {
  return (
    <div>
      <Meninas />

      <div className="flex flex-col md:flex-row w-full justify-between align-center bg-white overflow-hidden px-8 sm:px-[5%] lg:px-[10%] pt-14 pb-20 sm:py-32 gap-20">
        <div className="flex-1 flex flex-col gap-10 items-start">
          <h1 id="quem-somos" className="font-black text-4xl">
            Quem somos
          </h1>
          <p className="text-xl">
            A Doki Live é um grupo de Vtubers dedicado a criar um ambiente
            acolhedor e apaixonante, onde o entretenimento se transforma em
            conexão genuína. Com cinco integrantes talentosas, levamos diversão,
            criatividade e inovação ao público, promovendo uma comunidade
            vibrante e inclusiva.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.twitch.tv/team/prismaticpretty"
              target="_blank"
              className="bg-pink rounded-full p-2 shadow-lg"
            >
              <FaTwitch color="white" className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.youtube.com/@DokiLiveProject"
              target="_blank"
              className="bg-pink rounded-full p-2 shadow-lg"
            >
              <FaYoutube color="white" className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.instagram.com/dokiliveoficial_/"
              target="_blank"
              className="bg-pink rounded-full p-2 shadow-lg"
            >
              <FaInstagram color="white" className="w-8 h-8" />
            </Link>
            <Link
              href="https://x.com/DokiLiveOficial"
              target="_blank"
              className="bg-pink rounded-full p-2 shadow-lg"
            >
              <FaXTwitter color="white" className="w-8 h-8" />
            </Link>
          </div>
        </div>
        <div id="sobre-polaroid-container" className="flex-1 relative min-h-[26rem] md:min-h-[20rem]">
          <img
            src="/chibis.png"
            alt="Chibis das meninas da Doki"
            id="sobre-polaroid1"
            className="polaroid absolute top-1/2 left-1/2 w-44 border-solid border-[0.75rem] border-b-[2.75rem] border-white shadow-2xl"
          />
          <img
            src="/polaroid.png"
            alt="Polaroid das meninas da Doki"
            id="sobre-polaroid2"
            className="polaroid absolute top-1/2 left-1/2 w-72 border-solid border-[1.25rem] border-b-[4rem] border-white shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 bg-pink text-white px-8 sm:px-[5%] lg:px-[10%] sm:p-20">
        <h1 className="font-black text-4xl">Nossa missão</h1>
        <p className="text-xl">
          Nossa missão na Doki Live é criar um espaço acolhedor e apaixonado,
          onde a criação de conteúdo vai além do entretenimento, conectando
          corações e pessoas ao redor do mundo. Promovemos e expandimos o
          mercado Vtuber, inovando em campanhas publicitárias e oferecendo
          experiências imersivas que fortalecem a comunidade. Com cada projeto,
          buscamos tocar o público de forma genuína, cultivando uma cultura
          inclusiva e inspiradora.
        </p>
      </div>

      <Valores />

      <div className="bg-yellow w-full p-8 sm:p-20">
        <h1 id="talentos" className="text-4xl text-white font-black">
          Talentos
        </h1>
        <Talentos color="yellow" hoverColor="pink" />
      </div>
    </div>
  );
}
