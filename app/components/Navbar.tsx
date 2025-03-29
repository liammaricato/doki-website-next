import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex h-20 justify-between items-center px-20 py-4 bg-white">
      <img src="doki.png" alt="Logo Doki" className="h-full" />
      <ul className="flex gap-8 text-black text-xl font-black">
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/#talentos">Talentos</Link>
        </li>
        <li>
          <Link href="/loja">Loja</Link>
        </li>
        <li>
          <Link href="/apoiar">Apoia-se</Link>
        </li>
      </ul>
    </nav>
  );
}
