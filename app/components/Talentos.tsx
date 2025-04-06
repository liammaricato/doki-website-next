"use client";

import Talento from "./Talento";

interface TalentosProps {
  color: "pink" | "blue" | "yellow";
}

export default function Talentos({ color }: TalentosProps) {
  return (
    <div id="talentos-container" className="flex w-full flex-wrap justify-around">
      <Talento
        title="Mayuyu"
        subtitle="A cafeteira?"
        image="/mayu.png"
        color={color}
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/mayuyuvt",
            all_channels: [
              "https://www.youtube.com/izumihmomo",
            ],
          },
          { 
            type: "youtube",
            href: "https://youtube.tv/izumihmomo",
            all_channels: [
              "https://youtube.tv/izumihmomo",
            ],
          },
          { 
            type: "instagram",
            href: "https://instagram.com/mayuyuvt",
          },
          { 
            type: "twitter",
            href: "https://twitter.com/mayuyuvt",
          },
        ]}
      />
      <Talento
        title="Izumih Momo"
        subtitle="A Elfa Mágica"
        image="/izu.png"
        color={color}
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/izumihmomo",
            all_channels: [
              "https://www.youtube.com/izumihmomo",
            ],
          },
          { 
            type: "youtube",
            href: "https://youtube.tv/izumihmomo",
            all_channels: [
              "https://youtube.tv/izumihmomo",
            ],
          },
          { 
            type: "instagram",
            href: "https://instagram.com/izumihmomo",
          },
          { 
            type: "twitter",
            href: "https://twitter.com/izumihmomo",
          },
        ]}
      />
      <Talento
        title="Kalo"
        subtitle="A Nerdola"
        image="/kalo.png"
        color={color}
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/izumihmomo",
            all_channels: [
              "https://www.youtube.com/izumihmomo",
            ],
          },
          { 
            type: "youtube",
            href: "https://youtube.tv/izumihmomo",
            all_channels: [
              "https://youtube.tv/izumihmomo",
            ],
          },
          { 
            type: "instagram",
            href: "https://instagram.com/mayuyuvt",
          },
          { 
            type: "twitter",
            href: "https://twitter.com/mayuyuvt",
          },
        ]}
      />
      <Talento
        title="Nath Miks"
        subtitle="A Deusa Raposa"
        image="/nath.png"
        color={color}
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/izumihmomo",
            all_channels: [
              "https://www.youtube.com/izumihmomo",
            ],
          },
          { 
            type: "youtube",
            href: "https://youtube.tv/izumihmomo",
            all_channels: [
              "https://youtube.tv/izumihmomo",
            ],
          },
          { 
            type: "instagram",
            href: "https://instagram.com/mayuyuvt",
          },
          { 
            type: "twitter",
            href: "https://twitter.com/mayuyuvt",
          },
        ]}
      />
      <Talento
        title="Panshee"
        subtitle="A Sombra"
        image="/panshas.png"
        color={color}
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/izumihmomo",
            all_channels: [
              "https://www.youtube.com/izumihmomo",
            ],
          },
          { 
            type: "youtube",
            href: "https://youtube.tv/izumihmomo",
            all_channels: [
              "https://youtube.tv/izumihmomo",
            ],
          },
          { 
            type: "instagram",
            href: "https://instagram.com/mayuyuvt",
          },
          { 
            type: "twitter",
            href: "https://twitter.com/mayuyuvt",
          },
        ]}
      />
    </div>
  );
}
