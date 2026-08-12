// Dados compartilhados do portfólio.
// Fonte das informações: pesquisa de portfólio (research-portfolio/) + decisões do Alef (12/08/2026).

export type ProjectStatus = "Em produção" | "Produção" | "Produção empresa" | "Em desenvolvimento" | "Pessoal";

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  link?: string;
  linkLabel?: string;
  featured?: boolean;
}

// Mapa de cores Tailwind p/ cada tech. Padrão existente: "bg-{x}-500/10 text-{x}-400".
export const techColors: Record<string, string> = {
  Python: "bg-blue-500/10 text-blue-400",
  TypeScript: "bg-blue-500/10 text-blue-300",
  "Next.js": "bg-zinc-500/10 text-zinc-300",
  React: "bg-sky-500/10 text-sky-400",
  "Node.js": "bg-green-500/10 text-green-400",
  FastAPI: "bg-teal-500/10 text-teal-400",
  PostgreSQL: "bg-indigo-500/10 text-indigo-400",
  Prisma: "bg-zinc-500/10 text-zinc-300",
  Docker: "bg-sky-500/10 text-sky-400",
  Tailwind: "bg-cyan-500/10 text-cyan-400",
  Redis: "bg-red-500/10 text-red-400",
  IA: "bg-fuchsia-500/10 text-fuchsia-400",
  OCR: "bg-purple-500/10 text-purple-400",
  Playwright: "bg-emerald-500/10 text-emerald-400",
  SQLite: "bg-slate-500/10 text-slate-300",
  WhatsApp: "bg-green-500/10 text-green-400",
  "Home Assistant": "bg-blue-500/10 text-blue-400",
  MongoDB: "bg-green-500/10 text-green-400",
  Git: "bg-orange-500/10 text-orange-400",
  "Nginx": "bg-emerald-500/10 text-emerald-400",
};

export const projects: Project[] = [
  {
    slug: "alef-atelie",
    title: "Alef Ateliê",
    description:
      "ERP de confecção em produção: formação de custo, controle de insumos, NF-e com parse de XML completo, financeiro, clientes e pedidos.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    status: "Produção",
    link: "https://atelie.alefsander.dev",
    linkLabel: "Ver demo",
    featured: true,
  },
  {
    slug: "ms-site",
    title: "MS Site",
    description:
      "Sistema único oferecido à empresa: site público + portal de vagas + ouvidoria + cadastro de candidatos, com dashboard de gestão integrado e suite de testes pesada (~1800 testes / 0 falhas).",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    status: "Produção empresa",
    featured: true,
  },
  {
    slug: "ms-automatizar",
    title: "MS-Automatizar",
    description:
      "Automação administrativa com IA: OCR de documentos, folhas de ponto, holerites, envio por WhatsApp/email e cache Redis (-95% de queries).",
    tech: ["Python", "FastAPI", "Redis", "IA"],
    status: "Produção empresa",
    featured: true,
  },
  {
    slug: "forticode",
    title: "FortiCode",
    description:
      "SaaS de segurança: scanner de vulnerabilidades de repositórios GitHub com agente de IA executado em sandbox efêmero.",
    tech: ["Next.js", "TypeScript", "Python", "Docker"],
    status: "Em desenvolvimento",
    featured: true,
  },
  {
    slug: "extrator-produtos",
    title: "Extrator de Produtos",
    description:
      "Script Python que automatiza a extração de produtos de marketplaces (ML, Amazon e Shopee) com Playwright e armazenamento em SQLite.",
    tech: ["Python", "Playwright", "SQLite"],
    status: "Pessoal",
  },
  {
    slug: "home-assistant",
    title: "Home Assistant",
    description:
      "Automação residencial: controle de lâmpadas por comando de voz, integrado ao Home Assistant com assistente local.",
    tech: ["Python", "Docker", "Home Assistant"],
    status: "Pessoal",
  },
  {
    slug: "monitoramento-servidor",
    title: "Monitoramento de Servidor",
    description:
      "Monitoramento completo do servidor com Uptime Kuma, métricas em tempo real com Netdata e alertas via Telegram.",
    tech: ["Docker"],
    status: "Pessoal",
  },
  {
    slug: "alefsander-openclaw",
    title: "alefsander-openclaw",
    description:
      "OpenClaw customizado rodando em Docker com reconhecimento de voz (Whisper), OCR e automação de navegador.",
    tech: ["Docker", "Node.js"],
    status: "Pessoal",
    link: "https://github.com/alefsanderribeiro",
    linkLabel: "GitHub",
  },
  {
    slug: "searxng",
    title: "SearXNG",
    description:
      "Metabusca privada self-hosted para buscas sem rastreamento, oferecendo privacidade total na pesquisa.",
    tech: ["Docker"],
    status: "Pessoal",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
