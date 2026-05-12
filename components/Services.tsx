import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { icon: "🖥️", title: "Desenvolvimento Web", desc: "Sites, sistemas e aplicações web responsivos e modernos, do front-end ao back-end, com foco em performance e experiência do usuário." },
  { icon: "⚙️", title: "Automação de Processos", desc: "Scripts, bots e fluxos automatizados que eliminam tarefas repetitivas, integrando sistemas e reduzindo erros operacionais." },
  { icon: "🔌", title: "APIs & Integrações", desc: "Desenvolvimento e integração de APIs REST para conectar plataformas, serviços externos e sistemas internos de forma segura e eficiente." },
  { icon: "🤖", title: "Bots & Chatbots", desc: "Automações inteligentes para WhatsApp, Telegram e web — atendimento automatizado, notificações e fluxos de conversação personalizados." },
  { icon: "☁️", title: "Deploy & Cloud", desc: "Configuração de servidores, hospedagem em nuvem (Oracle Cloud, AWS, VPS) e CI/CD para garantir estabilidade e escalabilidade." },
  { icon: "📊", title: "Dashboards & Relatórios", desc: "Painéis de controle e relatórios automatizados que transformam dados brutos em informações acionáveis para tomadas de decisão." },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-center">O que eu desenvolvo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} className=" border-zinc-900 hover:border-emerald-500/50 transition-colors">
              <CardHeader>
                <div className="text-3xl mb-2 text-center">{s.icon}</div>
                <CardTitle className="text-xl text-center">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}