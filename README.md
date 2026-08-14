# alefsander.dev-site-next

Site pessoal/portfólio do **Alefsander** — apresenta projetos, experiência e cases de estudo em um portfólio estático moderno.

## 🔗 Deploy

- **Site oficial:** https://alefsander.dev (Vercel) — **canal principal**
- **Secundário:** https://alefsanderribeiro.github.io/alefsander.dev-site-next/ (GitHub Pages, via GitHub Actions em `master`)

> O site é uma build **estática** (`output: 'export'`), o que o torna compatível com os dois deploys.

## 🧱 Stack

- [Next.js](https://nextjs.org) (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- next-themes (dark/light)
- Deploy estático (Vercel + GitHub Pages)

## 🚀 Rodando localmente

```bash
npm install
npm run dev
# Abre em http://localhost:3000
```

Para preparar a build estática:

```bash
npm run build
# Gera a pasta /out (deploy estático)
```

## 📁 Estrutura relevante

- `app/` — páginas (rota raiz, `/projetos`, `/projetos/[slug]`, sitemap)
- `lib/` — dados do portfólio (`projects.ts`) e case studies (`caseStudies.ts`)
- `components/` — componentes de UI (Header, Footer, Portfolio, etc.)
- `public/` — assets estáticos (imagens, og-image)
- `research-portfolio/` — **documentação interna de pesquisa** (não versionada, com dados PII/privados)
- `relatorios/` — relatórios internos de auditoria (não versionados)

## ✅ Qualidade

- Requer `npx tsc --noEmit` passando antes de commitar (TypeScript limpo)
- Layout: portfólio com **featured** (cards grandes) + lista compacta dos demais projetos
- Cada projeto tem página individual com case study, stack e links

## 📌 Pendências

- **Imagens dos projetos** — nenhum projeto tem `images` preenchido ainda (placeholder). Em aberto, será fornecido pelo dono. Detalhes em `IMPLEMENTACAO_PORTFOLIO.md`.
