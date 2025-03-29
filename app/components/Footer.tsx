import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-start bg-white text-black px-20 py-8">
      <div className="flex-1 flex flex-col gap-4 px-10 py-12">
        <img src="doki.png" alt="Logo Doki" className="w-2/3"/>
      </div>
      <div className="flex-1 flex flex-col items-start gap-4">
        <h3 className="font-black text-l">CONTATO</h3>
        <p className="text-l">Deseja trabalhar com a Doki Live?</p>
        <Link
          className="py-3 px-6 text-l font-black bg-pink-300 text-white w-auto rounded-full"
          href="mailto:dokilivecontato@gmail.com"
        >
          Entrar em contato
        </Link>
      </div>
      <div className="flex-1 flex flex-col gap-4 p-8">
        <div className="flex gap-4">
          <img src="instagram.png" alt="Doki Live Intagram Link" className="w-8" />
          <img src="instagram.png" alt="Doki Live Intagram Link" className="w-8" />
          <img src="instagram.png" alt="Doki Live Intagram Link" className="w-8" />
          <img src="instagram.png" alt="Doki Live Intagram Link" className="w-8" />
        </div>
        <p className="text-l">© 2025 Doki Live.</p>
      </div>
    </footer>
  );
}
