"use client";
import { useInView } from "@/hooks/useInView";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const featuredServices = [
  { title: "Desenvolvimento Web", desc: "Sites, sistemas e aplicações web responsivos e modernos, do front-end ao back-end, com foco em performance e experiência do usuário." },
  { title: "Automação de Processos", desc: "Scripts, bots e fluxos automatizados que eliminam tarefas repetitivas, integrando sistemas e reduzindo erros operacionais." },
];

const compactServices = [
  { title: "APIs & Integrações", desc: "Desenvolvimento e integração de APIs REST para conectar plataformas, serviços externos e sistemas internos." },
  { title: "Bots & Chatbots", desc: "Automações inteligentes para WhatsApp, Telegram e web com fluxos de conversação personalizados." },
  { title: "Deploy & Cloud", desc: "Configuração de servidores, cloud (Oracle, AWS, VPS) e CI/CD para estabilidade e escalabilidade." },
  { title: "Dashboards & Relatórios", desc: "Painéis que transformam dados brutos em informações acionáveis para tomadas de decisão." },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="servicos" className="scroll-mt-16 py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-3xl font-bold mb-10 text-center ${inView ? "reveal-visible" : "reveal-hidden"}`}>O que eu desenvolvo</h2>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ${inView ? "stagger-children stagger-visible" : "stagger-children"}`}>
          {featuredServices.map((s, i) => (
            <Card key={i} className="border-border hover:border-brand/50 transition-colors relative overflow-hidden card-hover">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand/60" />
              <CardHeader><CardTitle className="text-xl">{s.title}</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">{s.desc}</p></CardContent>
            </Card>
          ))}
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${inView ? "stagger-children-d2 stagger-visible" : "stagger-children-d2"}`}>
          {compactServices.map((s, i) => (
            <Card key={i} className="border-border hover:border-brand/50 transition-colors card-hover">
              <CardHeader className="pb-2"><CardTitle className="text-base">{s.title}</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">{s.desc}</p></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
