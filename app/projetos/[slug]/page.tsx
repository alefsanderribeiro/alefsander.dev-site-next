import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProject, projects, techColors } from "@/lib/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

// Obrigatório para output: 'export' (deploy estático no GitHub Pages).
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Projeto não encontrado — Alefsander.DEV" };
  return {
    title: `${project.title} — Alefsander.DEV`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto max-w-3xl py-20 px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand transition mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao início
        </Link>
        <Link
          href="/projetos"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Todos os projetos
        </Link>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <Badge
            className={
              project.status === "Em produção" || project.status === "Produção" || project.status === "Produção empresa"
                ? "text-xs bg-emerald-500/10 text-emerald-400"
                : "text-xs bg-amber-500/10 text-amber-400"
            }
          >
            {project.status}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.tech.map((t) => (
            <Badge key={t} className={`text-sm ${techColors[t] || "bg-muted text-muted-foreground"}`}>{t}</Badge>
          ))}
        </div>

        <Card className="border-border">
          <CardContent className="p-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>{project.description}</p>
            <p className="text-sm">
              Esta página é a estrutura inicial do case de estudo. Uma apresentação detalhada —
              com destaques, objetivos e resultados — será adicionada em uma próxima fase.
            </p>
          </CardContent>
        </Card>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-6 h-10 px-5 rounded-lg bg-brand text-white text-sm font-medium hover:bg-brand-hover transition"
          >
            <ExternalLink className="w-4 h-4" /> {project.linkLabel || "Ver projeto"}
          </a>
        )}
      </div>
      <Footer />
    </main>
  );
}
