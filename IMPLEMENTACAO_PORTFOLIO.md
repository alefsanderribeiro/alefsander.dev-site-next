# Implementação — Novo Layout do Portfólio (Featured + Lista Compacta)

**Data:** 12/08/2026 · **Branch:** feat/portfolio (sem commit — apenas alterações locais)

## Resumo da decisão aplicada
1. **Parte A — Featured:** projetos com `featured: true` renderizados como cards grandes no topo, com espaço para thumbnail (imagem) e card inteiro clicável → `/projetos/<slug>`.
2. **Parte B — Lista compacta:** projetos sem `featured` renderizados como lista horizontal enxuta (índice + título + descrição de 1 linha + tech compacta + seta), cada item inteiro clicável → `/projetos/<slug>`.
3. **Sem link externo nos cards** — o link externo (demo/código) agora existe SOMENTE na página individual `/projetos/[slug]`.

## Arquivos alterados
- **components/Portfolio.tsx** — reescrito com o novo layout (Parte A + Parte B).
- **lib/projects.ts** — campo opcional `image?: string` adicionado à interface `Project`.

## Estrutura do Portfolio.tsx
- `featured = projects.filter(p => p.featured)` e `others = projects.filter(p => !p.featured)`.
- **Parte A:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` com `<Card>` grande por projeto. Se `project.image` existir usa `next/image` (`aspect-video`, `object-cover`, hover-zoom); senão manter placeholder `FolderGit2`. `Ver detalhes →` ao final. Todo o card envolto em `<Link>`.
- **Parte B:** coluna de `<Link>`s verticais compactos (`flex items-center gap-4 rounded-xl border bg-card px-4 py-3`), com índice `01..09` colorido, título, descrição `truncate` de 1 linha, tech em badges compactas (cor por `techColors`) e `ChevronRight` à direita.

## Campo image
- `lib/projects.ts` agora tem `image?: string` na interface (opcional — não quebra nada).
- No render, `project.image ? <Image .../> : <FolderGit2 .../>`. Layout pronto para receber as imagens quando o Alef fornecer.

## Build / Typecheck
- `npm run build` → **PASSOU**. Compiled em ~3.9s, TypeScript limpo, 14 páginas estáticas geradas (incluindo todas as `/projetos/[slug]`).

## Verificações finais
- ✔ Card/item inteiro clicável → `/projetos/<slug>` (Link envolve o card completo).
- ✔ Sem `ExternalLink` / sem botão de link externo nos cards (regra 3).
- ✔ Sem "Sandra" no código enviado (`components`, `lib`, `app`) — `grep` retornou 0.
- ℹ️ **Featured = 3:** `alef-atelie`, `ms-site` e `forticode` têm `featured: true` em `lib/projects.ts`. (O `ms-automatizar` NÃO é featured.)

## Pendências quando as imagens chegarem

> **STATUS (14/08/2026):** em aberto — o Alef ainda **NÃO forneceu as imagens** dos projetos. Portanto, **nenhum projeto tem imagem definida**; todos usam o placeholder de ícone `FolderGit2`. O layout já está pronto para recebê-las (basta seguir os passos abaixo). **O Alef vai colocar as imagens futuramente; não gerar automaticamente sem a aprovação dele.**

- **Nenhum projeto tem `images` preenchido atualmente.** Os 9 projetos (alef-atelie, ms-site, ms-automatizar, forticode, extrator-produtos, home-assistant, monitoramento-servidor, alefsander-openclaw, searxng) usam placeholder.
- **Priority: os 3 featured** (alef-atelie, ms-site, forticode) aparecem como cards grandes no topo — precisam de imagem primeiro.
- Adicionar o campo `images: [...]` em `lib/projects.ts` para os projetos desejados.
- Colocar os assets em `public/` (ex.: `public/projects/<slug>.png`) e referenciar via `images: ["/projects/<slug>.png"]`.
- `images[0]` é a imagem principal (card da home); demais são exibidas no carrossel da página individual.
- `app/projetos/page.tsx` (página índice de projetos) ainda usa o grid 3x3 antigo com `FolderGit2` placeholder — pode receber o mesmo tratamento de imagem se desejado.
