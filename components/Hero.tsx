"use client"
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-16 pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center items-center text-center hero-bg">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight hero-fade-in">
        Soluções inteligentes para o seu negócio
      </h1>
      <p className="max-w-2xl mb-8 text-lg hero-fade-in-d1">
        Desenvolvimento de sistemas, automações e ferramentas sob medida para transformar processos e impulsionar resultados.
      </p>
      <div className="flex flex-wrap gap-4 justify-center hero-fade-in-d2">
        <Button className="bg-brand hover:bg-brand-hover btn-hover brand-ring" onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}>
          Ver Serviços
        </Button>
        <Button variant="outline" className="border-border hover:bg-muted btn-hover brand-ring" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
          Fale Comigo
        </Button>
        <Button variant="ghost" className="hover:bg-muted btn-hover brand-ring" onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}>
          Saiba Mais
        </Button>
      </div>
    </section>
  );
}
