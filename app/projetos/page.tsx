import Link from "next/link";
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, techColors } from "@/lib/projects";
import { ArrowRight, FolderGit2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projetos — Alefsander.DEV",
  description: "Toda a coleção de projetos e cases desenvolvidos pela Alefsander.DEV.",
};

export default function ProjetosPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto max-w-6xl py-20 px-4">
        <h1 className="text-4xl font-bold mb-2">Projetos</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Cases de clientes, produtos e projetos pessoais de infraestrutura e automação.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.slug} className="border-border hover:border-brand/50 transition-colors overflow-hidden group card-hover flex flex-col">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <FolderGit2 className="w-12 h-12 text-muted-foreground/40" />
              </div>
              <CardContent className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-semibold text-lg">
                    <Link href={`/projetos/${project.slug}`} className="hover:text-brand transition">
                      {project.title}
                    </Link>
                  </h2>
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
                <p className="text-sm text-muted-foreground line-clamp-3 flex-1">{project.description}</p>
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} className={`text-xs ${techColors[t] || "bg-muted text-muted-foreground"}`}>{t}</Badge>
                    ))}
                  </div>
                )}
                <Link
                  href={`/projetos/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-hover font-medium mt-1 transition self-start"
                >
                  Ver detalhes <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
