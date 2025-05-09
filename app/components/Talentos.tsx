"use client";

import Talento from "./Talento";

interface TalentosProps {
  color: "pink" | "blue" | "yellow";
  hoverColor: "pink" | "blue" | "yellow";
}

export default function Talentos({ color, hoverColor }: TalentosProps) {
  return (
    <div id="talentos-container" className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-8 w-full place-items-center">
      <Talento
        title="Mayuyu"
        subtitle="A cafeteira?"
        image="/talentos/mayu.png"
        color={color}
        hoverColor={hoverColor} 
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/mayuyuvt",
          },
          { 
            type: "youtube",
            href: "https://www.youtube.com/@MayuyuVT",
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
        image="/talentos/izu.png"
        color={color}
        hoverColor={hoverColor}
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/izumihmomo",
          },
          { 
            type: "youtube",
            href: "https://youtube.com/@izumihmomo",
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
        image="/talentos/kalo.png"
        color={color}
        hoverColor={hoverColor}
        links={[
          { 
            type: "twitch",
            href: "https://www.twitch.tv/kalovt",
          },
          { 
            type: "youtube",
            href: "https://www.youtube.com/@kaloVT",
          },
          { 
            type: "instagram",
            href: "https://www.instagram.com/kalovtuber/",
          },
          { 
            type: "twitter",
            href: "https://twitter.com/kalovt",
          },
        ]}
      />
      <Talento
        title="Nath Miks"
        subtitle="A Deusa Raposa"
        image="/talentos/nath.png"
        color={color}
        hoverColor={hoverColor}
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/nathmiks",
          },
          { 
            type: "youtube",
            href: "https://youtube.com/@nathmiks",
          },
          { 
            type: "instagram",
            href: "https://instagram.com/nathmiks",
          },
          { 
            type: "twitter",
            href: "https://twitter.com/nathmiks",
          },
        ]}
      />
      <Talento
        title="Panshee"
        subtitle="A Sombra"
        image="/talentos/panshas.png"
        color={color}
        hoverColor={hoverColor}
        links={[
          { 
            type: "twitch",
            href: "https://twitch.tv/pansheevt",
          },
          { 
            type: "youtube",
            href: "https://youtube.com/@pansheevt",
          },
          { 
            type: "instagram",
            href: "https://instagram.com/pansheevt",
          },
          { 
            type: "twitter",
            href: "https://twitter.com/pansheevt",
          },
        ]}
      />
    </div>
  );
}
