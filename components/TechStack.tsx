import { Badge } from "@/components/ui/badge";

const techs = [
  "Python","TypeScript", "Next.js",
  "OpenAI API / Ollama", "Gemini", "Mistral AI",
  "Pandas", "NumPy", "FastAPI", "Django", 
  "Telegram", "Webhooks", "REST APIs",
  "MongoDB", "PostgreSQL", "MySQL", "Redis",
  "Docker", "uv (Package Manager)", "Linux / Ubuntu", "Oracle Cloud", "AWS",
  "Git / GitHub", "Scripts"
];

export default function TechStack() {
  return (
    <section id="tecnologias" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Tecnologias que utilizo</h2>
        <div className="flex flex-wrap gap-3">
          {techs.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-4 py-1.5 text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}