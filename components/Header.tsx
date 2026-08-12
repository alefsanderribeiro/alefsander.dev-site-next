"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/DropDownMenu";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isProjects = pathname.startsWith("/projetos");
  const isHome = pathname === "/";

  const links = [
    { id: "#sobre", label: "Sobre" },
    { id: "#servicos", label: "Serviços" },
    { id: "#tecnologias", label: "Tecnologias" },
    { id: "#portfolio", label: "Projetos" },
    { id: "#links", label: "Links" },
    { id: "#contato", label: "Contato" },
  ];

  // Na home as âncoras são simples (#sobre...). Em outras páginas, os links
  // apontam de volta à home na seção correta ("/#sobre"...).
  const hrefFor = (id: string) => (isHome ? id : `/${id}`);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href={isHome ? "#hero" : "/"}
          className="text-xl font-mono font-bold text-brand hover:text-brand-hover transition"
        >
          &lt;Alefsander.DEV /&gt;
        </a>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link) => {
            const isActive = link.id === "#portfolio" && isProjects;
            return (
              <a
                key={link.id}
                href={hrefFor(link.id)}
                className={`section-link transition ${
                  isActive ? "text-brand" : "hover:text-brand"
                } ${isActive ? "section-link-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />

          {/* Menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border text-foreground hover:bg-muted transition"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Painel mobile */}
      {open && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 py-4">
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive = link.id === "#portfolio" && isProjects;
              return (
                <a
                  key={link.id}
                  href={hrefFor(link.id)}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive ? "text-brand bg-brand/10" : "text-foreground hover:text-brand hover:bg-muted"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
