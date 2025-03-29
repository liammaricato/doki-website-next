"use client";

import Talento from "./Talento";

export default function Talentos() {
  return (
    <div id="talentos-container" className="flex w-full flex-wrap justify-around">
      <Talento
        title="Mayuyu"
        subtitle="A cafeteira?"
        image="/mayu.png"
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/mayuyuvt",
            icon: "icon_twitch.svg",
            icon_live: "icon_twitch.svg",
            all_channels: [
              "https://www.youtube.com/@orochidois1692",
            ],
          },
          { 
            type: "youtube",
            href: "https://youtube.tv/izumihmomo",
            icon: "icon_twitch.svg",
            icon_live: "icon_twitch.svg",
            all_channels: [
              "https://youtube.tv/izumihmomo",
            ],
          },
        ]}
      />
      <Talento
        title="Izumih Momo"
        subtitle="A Elfa Mágica"
        image="/izu.png"
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/izumihmomo",
            icon: "icon_twitch.svg",
            icon_live: "icon_twitch.svg",
            all_channels: [
              "https://www.youtube.com/@orochidois1692",
            ],
          },
          { 
            type: "youtube",
            href: "https://youtube.tv/izumihmomo",
            icon: "icon_twitch.svg",
            icon_live: "icon_twitch.svg",
            all_channels: [
              "https://youtube.tv/izumihmomo",
            ],
          },
        ]}
      />
      <Talento
        title="Kalo"
        subtitle="A Nerdola"
        image="/kalo.png"
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/izumihmomo",
            icon: "icon_twitch.svg",
            icon_live: "icon_twitch.svg",
            all_channels: [
              "https://www.youtube.com/@orochidois1692",
            ],
          },
          { 
            type: "youtube",
            href: "https://youtube.tv/izumihmomo",
            icon: "icon_twitch.svg",
            icon_live: "icon_twitch.svg",
            all_channels: [
              "https://youtube.tv/izumihmomo",
            ],
          },
        ]}
      />
      <Talento
        title="Nath Miks"
        subtitle="A Deusa Raposa"
        image="/nath.png"
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/izumihmomo",
            icon: "icon_twitch.svg",
            icon_live: "icon_twitch.svg",
            all_channels: [
              "https://www.youtube.com/@orochidois1692",
            ],
          },
          { 
            type: "youtube",
            href: "https://youtube.tv/izumihmomo",
            icon: "icon_twitch.svg",
            icon_live: "icon_twitch.svg",
            all_channels: [
              "https://youtube.tv/izumihmomo",
            ],
          },
        ]}
      />
      <Talento
        title="Panshee"
        subtitle="A Sombra"
        image="/panshas.png"
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/izumihmomo",
            icon: "icon_twitch.svg",
            icon_live: "icon_twitch.svg",
            all_channels: [
              "https://www.youtube.com/@orochidois1692",
            ],
          },
          { 
            type: "youtube",
            href: "https://youtube.tv/izumihmomo",
            icon: "icon_twitch.svg",
            icon_live: "icon_twitch.svg",
            all_channels: [
              "https://youtube.tv/izumihmomo",
            ],
          },
        ]}
      />
    </div>
  );
}
