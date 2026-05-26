"use client";
import { useInView } from "@/hooks/useInView";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const { ref, inView } = useInView();
  return (
    <section id="sobre" className="scroll-mt-16 py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className={inView ? "reveal-visible" : "reveal-hidden"}>
            <h2 className="text-3xl font-bold mb-6">Quem &eacute; a Alefsander.DEV?</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>A Alefsander.DEV &eacute; uma empresa pessoal de programa&ccedil;&atilde;o e automa&ccedil;&atilde;o, focada em criar solu&ccedil;&otilde;es de software pr&aacute;ticas, eficientes e sob medida para neg&oacute;cios de todos os tamanhos.</p>
              <p>Com sede em Porto Velho &mdash; RO, atendo clientes locais e remotos em todo o Brasil, entregando projetos com qualidade, transpar&ecirc;ncia e comprometimento.</p>
              <p>Meu trabalho vai desde o desenvolvimento de sistemas web e APIs, at&eacute; automa&ccedil;&otilde;es de processos que economizam horas do seu dia a dia operacional.</p>
            </div>
          </div>

          <div className={`mt-0 ${inView ? "reveal-visible-d1" : "reveal-hidden-d1"}`}>
            <div className="rounded-lg overflow-hidden border border-border shadow-elevation-lo">
              <div className="bg-muted px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 terminal-dot"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 terminal-dot"></div>
                  <div className="w-3 h-3 rounded-full bg-brand/80 terminal-dot"></div>
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">alefsander_dev.py</span>
              </div>

              <Card className="rounded-none border-none bg-card font-mono text-sm overflow-hidden">
                <CardContent className="p-6 text-card-foreground/80">
                  <pre className="whitespace-pre overflow-x-auto leading-relaxed">
                    <code className="text-blue-400">class</code> <span className="text-brand">AlefsanderDev</span>:{"\n"}
                    {"    "}def <span className="text-amber-300">__init__</span>(self):{"\n"}
                    {"        "}self.nome = <span className="text-brand">"Alefsander"</span>{"\n"}
                    {"        "}self.cargo = <span className="text-brand">"Dev & Automação"</span>{"\n"}
                    {"        "}self.local = <span className="text-brand">"Porto Velho, RO"</span>{"\n"}
                    {"        "}self.foco = [ {"\n"}
                    {"            "}<span className="text-brand">"Sistemas Web"</span>,{"\n"}
                    {"            "}<span className="text-brand">"Automações"</span>,{"\n"}
                    {"            "}<span className="text-brand">"APIs REST"</span>{"\n"}
                    {"        "}] {"\n"}
                    {"        "}self.disponivel = <span className="text-orange-400">True</span>{"\n"}
                    {"\n"}
                    dev = <span className="text-brand">AlefsanderDev</span>(){"\n"}
                    <span className="text-blue-400">print</span>(<span className="text-brand">"Vamos construir algo!"</span>)
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
