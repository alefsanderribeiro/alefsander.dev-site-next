import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProject, projects, techColors } from "@/lib/projects";
import { getCaseStudy } from "@/lib/caseStudies";
import { ArrowLeft, CheckCircle2, ExternalLink, FolderGit2 } from "lucide-react";
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

  const study = getCaseStudy(slug);

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

        {/* Imagem / hero */}
        <div className="mb-8">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover rounded-xl border border-border"
            />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-muted">
              <FolderGit2 className="h-12 w-12 text-muted-foreground/40" />
            </div>
          )}
        </div>

        <Card className="border-border mb-8">
          <CardContent className="p-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>{project.description}</p>
            {study?.summary && (
              <p className="font-medium text-foreground">{study.summary}</p>
            )}
          </CardContent>
        </Card>

        {/* Case study completo */}
        {study && (
          <div className="flex flex-col gap-8">
            {study.sections.map((section) => (
              <Card key={section.title} className="border-border">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                  {section.paragraphs?.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {section.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-brand/70" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}

            {/* Stack */}
            {study.stack.length > 0 && (
              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-xl font-semibold text-foreground">Stack</h2>
                  <div className="flex flex-wrap gap-1.5">
                    {study.stack.map((t) => (
                      <Badge key={t} className={`text-sm ${techColors[t] || "bg-muted text-muted-foreground"}`}>{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Links de ação */}
        {(project.link || (study && study.links.length > 0)) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 h-10 px-5 rounded-lg bg-brand text-white text-sm font-medium hover:bg-brand-hover transition"
              >
                <ExternalLink className="w-4 h-4" /> {project.linkLabel || "Ver projeto"}
              </a>
            )}
            {study?.links
              .filter((l) => !project.link || l.href !== project.link)
              .map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 h-10 px-5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition"
                >
                  <ExternalLink className="w-4 h-4" /> {l.label}
                </a>
              ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
