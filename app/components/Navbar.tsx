import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Navbar() {
  return (
    <nav className="flex h-20 justify-between items-center px-8 sm:px-20 py-4 bg-white">
      <img src="doki.png" alt="Logo Doki" className="h-full" />
      
      <Sheet>
        <SheetTrigger>
          <svg id="menu-icon" className="md:hidden cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-8 text-black text-xl font-black">
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
        </SheetContent>
      </Sheet>

      <ul className="hidden md:flex gap-8 text-black text-xl font-black">
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
