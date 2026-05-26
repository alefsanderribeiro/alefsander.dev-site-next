import { ModeToggle } from "@/components/DropDownMenu"

export default function Header() {
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#tecnologias", label: "Tecnologias" },
    { href: "#portfolio", label: "Projetos" },
    { href: "#links", label: "Links" },
    { href: "#contato", label: "Contato" },
  ];


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-mono font-bold text-brand hover:text-brand-hover transition">
          &lt;Alefsander.DEV /&gt;
        </a>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="section-link hover:text-brand transition">
              {link.label}
            </a>
            
          ))}
          
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}