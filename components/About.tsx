import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Quem é a Alefsander.DEV?</h2>
        <div className="space-y-4 leading-relaxed">
          <p>A Alefsander.DEV é uma empresa pessoal de programação e automação, focada em criar soluções de software práticas, eficientes e sob medida para negócios de todos os tamanhos.</p>
          <p>Com sede em Porto Velho – RO, atendo clientes locais e remotos em todo o Brasil, entregando projetos com qualidade, transparência e comprometimento.</p>
          <p>Meu trabalho vai desde o desenvolvimento de sistemas web e APIs, até automações de processos que economizam horas do seu dia a dia operacional.</p>
        </div>

        {/* Terminal Visual */}
        <div className="mt-8 rounded-lg overflow-hidden border border-zinc-800 shadow-2xl">
          {/* Barra Superior do Terminal */}
          <div className="bg-zinc-800 px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <span className="text-xs text-zinc-400 font-mono ml-2">alefsander_dev.py</span>
          </div>

          <Card className="rounded-none border-none bg-zinc-950 font-mono text-sm overflow-hidden">
            <CardContent className="p-6 text-zinc-300">
              <pre className="whitespace-pre overflow-x-auto leading-relaxed">
                <code className="text-blue-400">class</code> <span className="text-emerald-400">AlefsanderDev</span>:{"\n"}
                {"    "}def <span className="text-amber-300">__init__</span>(self):{"\n"}
                {"        "}self.nome = <span className="text-emerald-500">"Alefsander"</span>{"\n"}
                {"        "}self.cargo = <span className="text-emerald-500">"Dev & Automação"</span>{"\n"}
                {"        "}self.local = <span className="text-emerald-500">"Porto Velho, RO"</span>{"\n"}
                {"        "}self.foco = [ {"\n"}
                {"            "}<span className="text-emerald-500">"Sistemas Web"</span>,{"\n"}
                {"            "}<span className="text-emerald-500">"Automações"</span>,{"\n"}
                {"            "}<span className="text-emerald-500">"APIs REST"</span>{"\n"}
                {"        "}] {"\n"}
                {"        "}self.disponivel = <span className="text-orange-400">True</span>{"\n"}
                {"\n"}
                dev = <span className="text-emerald-400">AlefsanderDev</span>(){"\n"}
                <span className="text-blue-400">print</span>(<span className="text-emerald-500">"Vamos construir algo!"</span>)
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
