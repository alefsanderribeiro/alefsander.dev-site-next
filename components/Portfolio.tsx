"use client";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects, techColors } from "@/lib/projects";
import { ExternalLink, FolderGit2 } from "lucide-react";

export default function Portfolio() {
  const { ref, inView } = useInView();
  const hasProjects = projects.length > 0;

  return (
    <section id="portfolio" className="scroll-mt-16 py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-3xl font-bold mb-2 text-center ${inView ? "reveal-visible" : "reveal-hidden"}`}>Projetos</h2>
        <p className={`text-muted-foreground mb-10 text-center max-w-xl mx-auto ${inView ? "reveal-visible-d1" : "reveal-hidden-d1"}`}>
          Cases e projetos desenvolvidos sob medida para cada cliente.
        </p>

        {!hasProjects ? (
          <div className={`text-center py-16 ${inView ? "reveal-visible-d2" : "reveal-hidden-d2"}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Nenhum projeto cadastrado ainda</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Os cases estão sendo preparados. Enquanto isso, conheça os serviços disponíveis ou entre em contato para conversarmos sobre o seu projeto.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#servicos" className="inline-flex items-center justify-center h-9 px-4 rounded-lg bg-brand text-white text-sm font-medium hover:bg-brand-hover transition">Ver Serviços</a>
              <a href="#contato" className="inline-flex items-center justify-center h-9 px-4 rounded-lg border border-border text-sm font-medium hover:bg-muted transition">Fale Comigo</a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <Card key={project.slug} className="border-border hover:border-brand/50 transition-colors overflow-hidden group card-hover flex flex-col">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <FolderGit2 className="w-12 h-12 text-muted-foreground/40" />
                </div>
                <CardContent className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-lg">
                      <a href={`/projetos/${project.slug}`} className="hover:text-brand transition">
                        {project.title}
                      </a>
                    </h3>
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
                  <p className="text-sm text-muted-foreground flex-1">{project.description}</p>
                  {project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge key={t} className={`text-xs ${techColors[t] || "bg-muted text-muted-foreground"}`}>{t}</Badge>
                      ))}
                    </div>
                  )}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-hover font-medium mt-1 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.linkLabel || "Ver projeto"}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/60 mt-1">
                      <ExternalLink className="w-4 h-4" />
                      Privado
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
