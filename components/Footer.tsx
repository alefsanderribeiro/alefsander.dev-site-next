"use client";
import { useInView } from "@/hooks/useInView";

export default function Footer() {
  const { ref, inView } = useInView();
  return (
    <footer className={`py-12 px-4 text-center text-sm ${inView ? "reveal-visible" : "reveal-hidden"}`} ref={ref}>
      <div className="container mx-auto">
        <a href="#hero" className="text-xl font-mono font-bold text-brand hover:text-brand-hover transition">
          &lt;Alefsander.DEV /&gt;
        </a>
        <p className="mt-4 text-sm text-muted-foreground max-w-sm mx-auto">
          Vamos construir algo juntos?
        </p>
        <a
          href="#contato"
          className="inline-block mt-3 text-sm font-medium text-brand hover:text-brand-hover transition"
        >
          Entre em contato &rarr;
        </a>
        <p className="mt-6 mb-2 text-xs text-muted-foreground">Porto Velho, Rondônia &mdash; Brasil</p>
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Alefsander.DEV &mdash; Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
