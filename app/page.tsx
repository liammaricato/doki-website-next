// import Image from "next/image";

export const runtime = "edge";

export default function Home() {
  return (
    <div>
      <div className="meninas flex w-full">
        <div className="menina flex-auto bg-yellow-300"></div>
        <div className="menina flex-auto bg-pink-300"></div>
        <div className="menina flex-auto bg-blue-300"></div>
        <div className="menina flex-auto bg-yellow-300"></div>
        <div className="menina flex-auto bg-pink-300"></div>
      </div>
      <div className="flex w-full justify-between align-center bg-white px-20 py-32 gap-20">
        <div className="flex-1 flex flex-col gap-10 items-start">
          <h1 className="font-black text-4xl">Sobre</h1>
          <p className="text-2xl">
            A Doki Live é um grupo de Vtubers dedicado a criar um ambiente
            acolhedor e apaixonante, onde o entretenimento se transforma em
            conexão genuína. Com cinco integrantes talentosas, levamos diversão,
            criatividade e inovação ao público, promovendo uma comunidade
            vibrante e inclusiva.
          </p>
          <a
            className="py-3 px-6 text-xl font-black bg-pink-300 text-white w-auto rounded-full"
            href=""
          >
            Veja mais
          </a>
        </div>
        <div className="flex-1 relative">
          <img
            src="/polaroid.png"
            alt="Polaroid das meninas da Doki"
            id="polaroid1"
            className="absolute top-1/2 left-1/2"
          />
          <img
            src="/polaroid.png"
            alt="Polaroid das meninas da Doki"
            id="polaroid2"
            className="absolute top-1/2 left-1/2"
          />
        </div>
      </div>
      <div className="bg-blue-300 w-full p-20">
        <h1 className="text-4xl text-white font-black">Talentos</h1>
        <div className="flex w-full flex-wrap justify-around">
          <div className="w-1/4 px-4 py-8 flex flex-col items-center gap-6">
            <img
              src="/izu.png"
              alt="Retrato de Izumih Momo"
              className="rounded-full border-solid border-white border-8 shadow-lg"
            />
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-3xl text-white font-extrabold">
                Izumih Momo
              </h2>
              <h3 className="text-3xl text-white font-semibold">
                A Elfa Mágica
              </h3>
            </div>
            <div className="flex flex-wrap justify-around gap-2">
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
            </div>
          </div>
          <div className="w-1/4 px-4 py-8 flex flex-col items-center gap-6">
            <img
              src="/izu.png"
              alt="Retrato de Izumih Momo"
              className="rounded-full border-solid border-white border-8 shadow-lg"
            />
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-3xl text-white font-extrabold">
                Izumih Momo
              </h2>
              <h3 className="text-3xl text-white font-semibold">
                A Elfa Mágica
              </h3>
            </div>
            <div className="flex flex-wrap justify-around gap-2">
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
            </div>
          </div>
          <div className="w-1/4 px-4 py-8 flex flex-col items-center gap-6">
            <img
              src="/izu.png"
              alt="Retrato de Izumih Momo"
              className="rounded-full border-solid border-white border-8 shadow-lg"
            />
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-3xl text-white font-extrabold">
                Izumih Momo
              </h2>
              <h3 className="text-3xl text-white font-semibold">
                A Elfa Mágica
              </h3>
            </div>
            <div className="flex flex-wrap justify-around gap-2">
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
            </div>
          </div>
          <div className="w-1/4 px-4 py-8 flex flex-col items-center gap-6">
            <img
              src="/izu.png"
              alt="Retrato de Izumih Momo"
              className="rounded-full border-solid border-white border-8 shadow-lg"
            />
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-3xl text-white font-extrabold">
                Izumih Momo
              </h2>
              <h3 className="text-3xl text-white font-semibold">
                A Elfa Mágica
              </h3>
            </div>
            <div className="flex flex-wrap justify-around gap-2">
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
            </div>
          </div>
          <div className="w-1/4 px-4 py-8 flex flex-col items-center gap-6">
            <img
              src="/izu.png"
              alt="Retrato de Izumih Momo"
              className="rounded-full border-solid border-white border-8 shadow-lg"
            />
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-3xl text-white font-extrabold">
                Izumih Momo
              </h2>
              <h3 className="text-3xl text-white font-semibold">
                A Elfa Mágica
              </h3>
            </div>
            <div className="flex flex-wrap justify-around gap-2">
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
              <a href="https://twitch.tv/izumihmomo">
                <img src="icon_twitch.svg" alt="Link para Twitch" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
