import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Vamos conversar?</h2>
        <p className=" mb-8">
          Tem um projeto em mente? Quer automatizar um processo? Entre em contato por e-mail e responderei o mais breve possível.
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl mb-2">✉️</div>
          <a href="mailto:contato@alefsander.dev" className="text-xl font-medium text-emerald-400 hover:underline">
            contato@alefsander.dev
          </a>
          <p className=" text-sm mt-2">Atendo clientes em todo o Brasil.</p>
          <p className="text-sm">Com sede em Porto Velho, Rondônia — Brasil.</p>
          <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600 px-8">
            <a href="mailto:contato@alefsander.dev">Enviar E-mail</a>
          </Button>
        </div>
      </div>
    </section>
  );
}