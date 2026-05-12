export default function Footer() {
  return (
    <footer className="py-8 px-4   text-center text-sm ">
      <div className="container mx-auto">
        <a href="#hero" className="text-xl font-mono font-bold text-emerald-400 hover:text-emerald-300 transition">
          &lt;Alefsander.DEV /&gt;
        </a>
        <p className="mb-2">Porto Velho, Rondônia — Brasil</p>
        <p>© {new Date().getFullYear()} Alefsander.DEV</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}