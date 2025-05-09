import { IconType } from "react-icons";
import { FaTwitch, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import tailwindConfig from "@/tailwind.config";
import { useState } from "react";

interface SocialIconProps {
  type: string;
  color: "pink" | "blue" | "yellow";
  hoverColor: "pink" | "blue" | "yellow";
}

export default function SocialIcon({ type, color, hoverColor }: SocialIconProps) {
  const [currentColor, setCurrentColor] = useState<"pink" | "blue" | "yellow">(color);

  const colors = {
    pink: tailwindConfig.theme.extend.colors.pink,
    blue: tailwindConfig.theme.extend.colors.blue,
    yellow: tailwindConfig.theme.extend.colors.yellow,
  };

  const iconMap: Record<string, IconType> = {
    twitch: FaTwitch,
    youtube: FaYoutube,
    instagram: FaInstagram,
    twitter: FaXTwitter,
  };

  const Icon = iconMap[type];

  if (!Icon) return null;

  return (
    <Icon
      color={colors[currentColor]}
      onMouseEnter={() => setCurrentColor(hoverColor)}
      onMouseLeave={() => setCurrentColor(color)}
      className="w-6 h-6 transition-colors duration-200"
    />
  );
} 