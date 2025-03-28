export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-white text-black px-20 py-4">
      <img src="doki.png" alt="Logo Doki" className="flex-1" />
      <div>
        <h3>CONTATO</h3>
        <p>Deseja trabalhar com a Doki Live?</p>
        <a
          className="py-3 px-6 text-xl font-black bg-pink-300 text-white w-auto rounded-full"
          href=""
        >
          Entrar em contato
        </a>
      </div>
    </footer>
  );
}
