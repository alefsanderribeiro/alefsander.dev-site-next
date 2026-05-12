import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
        Soluções inteligentes para o seu negócio
      </h1>
      <p className="max-w-2xl mb-8 text-lg">
        Desenvolvimento de sistemas, automações e ferramentas sob medida para transformar processos e impulsionar resultados.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          <a href="#servicos">Ver Serviços</a>
        </Button>
        <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
          <a href="#contato">Fale Comigo</a>
        </Button>
        <Button variant="ghost" className="hover:bg-zinc-800">
          <a href="#sobre">Saiba Mais</a>
        </Button>
      </div>
    </section>
  );
}