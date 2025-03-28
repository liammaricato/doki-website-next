"use client";

import Talento from "./Talento";

export default function Talentos() {
  return (
    <div id="talentos-container" className="flex w-full flex-wrap justify-around">
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
            icon: "icon_youtube.svg",
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
