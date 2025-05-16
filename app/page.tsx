import Link from "next/link";
import Talentos from "./components/Talentos";
import Meninas from "./components/MeninasCarousel";

export const runtime = "edge";

export default function Home() {
  return (
    <div>
      <Meninas />

      <div className="flex flex-col md:flex-row w-full justify-between align-center bg-white overflow-hidden px-8 sm:px-[5%] lg:px-[10%] pt-14 pb-20 sm:py-32 gap-20">
        <div className="flex-1 flex flex-col gap-10 items-start">
          <h1 className="font-black text-4xl">Sobre</h1>
          <p className="text-xl">
            A Doki Live é um grupo de Vtubers dedicado a criar um ambiente
            acolhedor e apaixonante, onde o entretenimento se transforma em
            conexão genuína. Com cinco integrantes talentosas, levamos diversão,
            criatividade e inovação ao público, promovendo uma comunidade
            vibrante e inclusiva.
          </p>
          <Link
            className="py-3 px-6 text-xl font-black bg-pink text-white w-auto rounded-full"
            href="/sobre#quem-somos"
          >
            Veja mais
          </Link>
        </div>
        <div className="flex-1 relative min-h-[26rem] md:min-h-[20rem]">
          <img
            src="/polaroid.png"
            alt="Polaroid das meninas da Doki"
            id="polaroid1"
            className="polaroid absolute top-1/2 left-1/2 w-56 border-solid border-[1rem] border-b-[3.5rem] border-white shadow-2xl"
          />
          <img
            src="/chibis.png"
            alt="Chibis das meninas da Doki"
            id="polaroid2"
            className="polaroid absolute top-1/2 left-1/2 w-56 border-solid border-[1rem] border-b-[3.5rem] border-white shadow-2xl"
          />
        </div>
      </div>
      <div className="bg-blue w-full p-8 sm:p-20">
        <h1 id="talentos" className="text-4xl text-white font-black">Talentos</h1>
        <Talentos color="blue" hoverColor="pink"/>
      </div>
    </div>
  );
}
