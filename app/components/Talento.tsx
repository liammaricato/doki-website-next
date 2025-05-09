"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SocialIcon from "./SocialIcon";

interface TalentoProps {
  title: string;
  subtitle: string;
  image: string;
  color: "pink" | "blue" | "yellow";
  hoverColor: "pink" | "blue" | "yellow";
  links: { type: string; href: string; all_channels?: string[] }[];
}

export default function Talento({ title, subtitle, image, color, hoverColor, links }: TalentoProps) {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    async function checkLiveStatus() {
      setIsLive(false);
    }

    checkLiveStatus();
  }, [links]);

  return (
    <div className="flex-1 sm:min-w-80 px-4 py-8 flex flex-col items-center gap-6 max-w-[18rem]">
      <img
        src={image}
        alt={`Retrato de ${title}`}
        className={`rounded-full border-solid ${isLive ? 'border-red-600' : 'border-white'} max-w-[16rem] border-8 shadow-lg`}
      />
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl text-white font-extrabold text-center">{title}</h2>
        <h3 className="text-3xl text-white font-semibold text-center">{subtitle}</h3>
        {isLive && <span className="text-green-500 font-bold">Ao Vivo</span>}
      </div>
      <div className="flex flex-wrap justify-around gap-2">
        {links.map((link, index) => (
          <Link key={index} href={link.href} target="_blank" className="bg-white rounded-full p-2 shadow-lg">
            <SocialIcon type={link.type} color={color} hoverColor={hoverColor} />
          </Link>
        ))}
      </div>
    </div>
  );
}
