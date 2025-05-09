import React from 'react';

interface ValorProps {
  src: string;
  text: string;
}

export default function Valor({ src, text }: ValorProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex justify-center items-center bg-blue rounded-full w-40 h-40">
        <img
          src={`/stickers/${src}.png`}
          alt={`Ícone de ${src}`}
          className="max-w-[70%] max-h-[70%] object-contain"
        />
      </div>
      <h2 className="font-extrabold text-xl text-center min-h-[3rem] sm:min-h-[4rem] flex items-center">
        {text}
      </h2>
    </div>
  );
} 