import React from 'react';
import Valor from './Valor';

const valores = [
  { src: 'CAMERA', text: 'Inovação Criativa'},
  { src: 'BALAO', text: 'Comunidade Inclusiva'},
  { src: 'ESTRELA', text: 'Conexão Autêntica'},	
  { src: 'LACO', text: 'Colaboração'},
  { src: 'MICROFONE', text: 'Responsabilidade'},
];

export default function Valores() {
  return (
    <div className="flex flex-col gap-14 bg-white p-8 sm:p-20">
      <h1 className="font-black text-4xl">Valores</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-8 w-full place-items-center">
        {valores.map((valor, index) => (
          <Valor key={index} src={valor.src} text={valor.text} />
        ))}
      </div>
    </div>
  );
} 