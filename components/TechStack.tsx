"use client";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    label: "Linguagens",
    items: ["Python", "TypeScript"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "FastAPI", "Django"],
  },
  {
    label: "IA & APIs",
    items: ["OpenAI API / Ollama", "Gemini", "Mistral AI", "REST APIs"],
  },
  {
    label: "Dados",
    items: ["Pandas", "NumPy", "MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    label: "DevOps & Cloud",
    items: ["Docker", "Linux / Ubuntu", "Oracle Cloud", "AWS"],
  },
  {
    label: "Ferramentas",
    items: ["Git / GitHub", "uv (Package Manager)", "Telegram", "Webhooks", "Scripts"],
  },
];

export default function TechStack() {
  const { ref, inView } = useInView();
  return (
    <section id="tecnologias" className="scroll-mt-16 py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2 className={`text-3xl font-bold mb-10 text-center ${inView ? "reveal-visible" : "reveal-hidden"}`}>Tecnologias que utilizo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={cat.label} className={`${inView ? `reveal-fade-up-d${i + 1}` : ""}`}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
