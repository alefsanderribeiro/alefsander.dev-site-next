"use client";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/556993451333";

export default function Contact() {
  const { ref, inView } = useInView();
  return (
    <section id="contato" className="scroll-mt-16 py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className={`text-3xl font-bold mb-4 ${inView ? "reveal-visible" : "reveal-hidden"}`}>Vamos conversar?</h2>
        <p className={`mb-8 ${inView ? "reveal-visible-d1" : "reveal-hidden-d1"}`}>
          Tem um projeto em mente? Quer automatizar um processo? Entre em contato por e-mail e responderei o mais breve possível.
        </p>
        <div className={`flex flex-col items-center gap-4 ${inView ? "reveal-visible-d2" : "reveal-hidden-d2"}`}>
          <a href="mailto:contato@alefsander.dev" className="text-xl font-medium text-brand hover:underline">
            contato@alefsander.dev
          </a>
          <p className="text-sm mt-2">Atendo clientes em todo o Brasil.</p>
          <p className="text-sm">Com sede em Porto Velho, Rondônia — Brasil.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button className="bg-brand hover:bg-brand-hover px-8 btn-hover brand-ring">
              <a href="mailto:contato@alefsander.dev" className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4" /> Enviar E-mail
              </a>
            </Button>
            <Button variant="outline" className="px-8 btn-hover">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                aria-label="WhatsApp — abre em nova aba"
              >
                <MessageCircle className="w-4 h-4" /> Conversar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
