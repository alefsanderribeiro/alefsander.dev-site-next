import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-muted mb-8">
            <span className="text-3xl font-mono font-bold text-brand">
              404
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
          <p className="text-muted-foreground mb-8">
            O conteúdo que você procura pode ter sido movido ou não existe mais.
            Que tal voltar para o início?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-lg bg-brand text-white text-sm font-medium hover:bg-brand-hover transition"
            >
              <Home className="w-4 h-4" /> Voltar ao início
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
