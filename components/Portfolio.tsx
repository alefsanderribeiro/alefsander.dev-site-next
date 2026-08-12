"use client";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects, techColors } from "@/lib/projects";
import { ArrowRight, ChevronRight, FolderGit2 } from "lucide-react";

const isProduction = (status: string) =>
  status === "Em produção" || status === "Produção" || status === "Produção empresa";

// Índice visual por posição na lista compacta (1..9).
const INDEX_STYLES = [
  "bg-blue-500/10 text-blue-400",
  "bg-emerald-500/10 text-emerald-400",
  "bg-amber-500/10 text-amber-400",
  "bg-fuchsia-500/10 text-fuchsia-400",
  "bg-cyan-500/10 text-cyan-400",
  "bg-orange-500/10 text-orange-400",
  "bg-teal-500/10 text-teal-400",
  "bg-rose-500/10 text-rose-400",
  "bg-indigo-500/10 text-indigo-400",
];

export default function Portfolio() {
  const { ref, inView } = useInView();
  const hasProjects = projects.length > 0;
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

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
          <div className="flex flex-col gap-10">
            {/* Parte A — Projetos em destaque (cards grandes) */}
            {featured.length > 0 && (
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${inView ? "reveal-visible-d1" : "reveal-hidden-d1"}`}>
                {featured.map((project) => (
                  <Link key={project.slug} href={`/projetos/${project.slug}`} className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 rounded-xl">
                    <Card className="border-border hover:border-brand/50 transition-colors overflow-hidden group-hover:card-hover card-hover flex flex-col h-full">
                      <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                        {project.images?.[0] ? (
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            width={800}
                            height={450}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <FolderGit2 className="w-12 h-12 text-muted-foreground/40 transition-colors group-hover:text-brand/50" />
                        )}
                      </div>
                      <CardContent className="p-5 flex flex-col gap-3 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-lg group-hover:text-brand transition-colors">{project.title}</h3>
                          <Badge
                            className={
                              isProduction(project.status)
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
                        <span className="inline-flex items-center gap-1.5 text-sm text-brand font-medium mt-1 transition group-hover:gap-2.5">
                          Ver detalhes <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            {/* Parte B — Demais projetos (lista compacta) */}
            {others.length > 0 && (
              <div className={`flex flex-col gap-3 ${inView ? "reveal-visible-d2" : "reveal-hidden-d2"}`}>
                {others.map((project, i) => (
                  <Link
                    key={project.slug}
                    href={`/projetos/${project.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-brand/50 hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${INDEX_STYLES[i % INDEX_STYLES.length]}`}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex min-w-0 flex-col gap-1 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-sm group-hover:text-brand transition-colors">{project.title}</h3>
                      </div>
                      <p className="truncate text-sm text-muted-foreground">{project.description}</p>
                      {project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span key={t} className={`inline-flex h-5 items-center rounded-4xl px-2 text-[11px] font-medium ${techColors[t] || "bg-muted text-muted-foreground"}`}>
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <ChevronRight className="w-4 h-4 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
