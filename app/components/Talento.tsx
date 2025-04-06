"use client";

import { useEffect, useState } from "react";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface TalentoProps {
  title: string;
  subtitle: string;
  image: string;
  links: { type: string; href: string; all_channels?: string[] }[];
}

export default function Talento({ title, subtitle, image, links }: TalentoProps) {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    async function checkLiveStatus() {
      // try {
      //   const response = await fetch(links[0].all_channels[0]);
      //   const html = await response.text();

      //   console.log("Live status:", html);
      //   setIsLive(html.includes('"isLive":true'));
      // } catch (error) {
      //   console.error("Failed to fetch live status:", error);
      // }

      // setTimeout(() => setIsLive(true), 5000);
      setIsLive(false);
    }

    checkLiveStatus();
  }, [links]);

  return (
    <div className="w-full sm:w-1/3 sm:min-w-80 px-4 py-8 flex flex-col items-center gap-6">
      <img
        src={image}
        alt={`Retrato de ${title}`}
        className={`rounded-full border-solid ${isLive ? 'border-red-600' : 'border-white'} border-8 shadow-lg`}
      />
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl text-white font-extrabold">{title}</h2>
        <h3 className="text-3xl text-white font-semibold">{subtitle}</h3>
        {isLive && <span className="text-green-500 font-bold">Ao Vivo</span>}
      </div>
      <div className="flex flex-wrap justify-around gap-2">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="bg-white rounded-full p-2 shadow-lg">
            {(() => {
              switch (link.type) {
                case "twitch":
                  return <FaTwitch color="#52C1B5" className="w-6 h-6" />;
                case "youtube":
                  return <FaYoutube color="#52C1B5" className="w-6 h-6" />;
                case "instagram":
                  return <FaInstagram color="#52C1B5" className="w-6 h-6" />;
                case "twitter":
                  return <FaXTwitter color="#52C1B5" className="w-6 h-6" />;
                default:
                  return null;
              }
            })()}
          </a>
        ))}
      </div>
    </div>
  );
}
