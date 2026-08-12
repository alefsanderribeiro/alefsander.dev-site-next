"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageCarouselProps {
  /** Título do projeto (usado no alt e acessibilidade). */
  title: string;
  /** Imagens do projeto. images[0] é a principal. */
  images?: string[];
}

/**
 * Carrossel de imagens da página individual do projeto.
 * Navegação por setas ← →, indicadores (bolinhas) clicáveis e contador "X/Y".
 * Quando `images.length === 1` as setas/bolinhas são ocultas (sem navegação).
 * Quando não há imagens, renderiza o placeholder de ícone (FolderGit2).
 */
export default function ImageCarousel({ title, images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const list = images?.length ? images : [];

  if (list.length === 0) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-muted">
        <FolderGit2 className="h-12 w-12 text-muted-foreground/40" />
      </div>
    );
  }

  const count = list.length;
  const hasMultiple = count > 1;

  const goTo = (index: number) => {
    const normalized = ((index % count) + count) % count;
    setCurrent(normalized);
  };

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
        <Image
          src={list[current]}
          alt={`${title} — imagem ${current + 1} de ${count}`}
          width={1024}
          height={576}
          className="h-full w-full object-cover"
          priority={current === 0}
        />

        {hasMultiple && (
          <>
            {/* Setas de navegação */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Button
                type="button"
                variant="secondary"
                size="icon-sm"
                aria-label="Imagem anterior"
                onClick={() => goTo(current - 1)}
                className="h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Button
                type="button"
                variant="secondary"
                size="icon-sm"
                aria-label="Próxima imagem"
                onClick={() => goTo(current + 1)}
                className="h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Contador */}
            <div className="absolute bottom-3 right-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
              {current + 1}/{count}
            </div>
          </>
        )}
      </div>

      {/* Indicadores (bolinhas) */}
      {hasMultiple && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {list.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para a imagem ${i + 1}`}
              aria-current={i === current}
              onClick={() => goTo(i)}
              className={
                "h-2 rounded-full transition-all " +
                (i === current
                  ? "w-6 bg-brand"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60")
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
