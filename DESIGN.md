---
name: Alefsander.DEV
description: Site institucional e portfólio de serviços de programação e automação
colors:
  technical-emerald: "oklch(0.696 0.17 162.48)"
  technical-emerald-hover: "oklch(0.596 0.17 162.48)"
  technical-emerald-light: "oklch(0.765 0.177 163.223)"
  dark-bg: "oklch(0.145 0 0)"
  dark-surface: "oklch(0.205 0 0)"
  dark-muted: "oklch(0.269 0 0)"
  dark-border: "oklch(0.331 0 0)"
  light-bg: "oklch(0.985 0 0)"
  light-surface: "oklch(1 0 0)"
  light-muted: "oklch(0.97 0 0)"
  light-border: "oklch(0.922 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
  destructive-foreground: "oklch(0.985 0 0)"
typography:
  body:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  display:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  mono:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  2xl: "18px"
  4xl: "26px"
spacing:
  section: "80px"
  component-gap: "24px"
  element-gap: "16px"
  tight: "8px"
components:
  button-primary:
    backgroundColor: "{colors.technical-emerald}"
    textColor: "#fff"
    rounded: "{rounded.md}"
    padding: "8px 20px"
    typography: "{typography.body}"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.dark-foreground}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.dark-border}"
    padding: "8px 20px"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.dark-foreground}"
    rounded: "{rounded.md}"
    padding: "8px 20px"
  card-default:
    backgroundColor: "{colors.dark-surface}"
    rounded: "{rounded.xl}"
    padding: "16px"
    typography: "{typography.body}"
  badge-secondary:
    backgroundColor: "{colors.dark-muted}"
    textColor: "{colors.dark-foreground}"
    rounded: "{rounded.4xl}"
    padding: "2px 12px"
    typography: "inherit"
---

# Design System: Alefsander.DEV

## 1. Overview

**Creative North Star: "A Bancada do Dev"**

O sistema visual da Alefsander.DEV é construído como uma bancada de trabalho de um desenvolvedor — ferramentas organizadas, iluminação focada, cada elemento no lugar certo. É escuro não por estética, mas por propósito: como um terminal ou IDE à noite, o fundo recua para deixar o conteúdo e as ações em evidência.

A paleta é monocromática neutra com um único acento verde esmeralda — a "Esmeralda Técnica" — que funciona como o LED de atividade da bancada: aparece em CTAs, links ativos e indicadores de estado, sempre de forma contida e intencional. A tipografia usa Geist (sans-serif técnica e limpa) com mono reservado para código e metadados.

O sistema rejeita explicitamente templates SaaS genéricos, gradientes decorativos, glassmorphism e cards idênticos repetidos em grid. A profundidade vem de sombras sutis (não de rings/ bordas laterais), e o ritmo visual alterna respiro e densidade para evitar monotonia.

**Key Characteristics:**
- Terminal moderno: escuro com acento verde técnico, sem ser lúdico ou "cyberpunk"
- Bancada organizada: espaçamento generoso entre seções, informação densa só onde precisa
- Um acento só: a esmeralda aparece em ≤10% da superfície — sua raridade é o ponto
- Profundidade com sombra: planos se distinguem por elevação, não por bordas coloridas
- Responsivo como ferramenta: micro-interações nos componentes passam a sensação de um bom instrumento de trabalho

## 2. Colors

A paleta é deliberadamente restrita: neutros quase-acromáticos com um único ponto de cor saturada. O acento verde esmeralda define a identidade visual.

### Primary

- **Esmeralda Técnica** (`oklch(0.696 0.17 162.48)`): O acento principal da marca. Usado em CTAs primários (botão "Ver Serviços"), links ativos no header, hover de links de navegação e indicadores de estado ativo (borda de card em hover). O tom é o Tailwind emerald-500: verde médio-saturado, legível tanto em fundo claro quanto escuro.

### Accent Hover (derivado)

- **Esmeralda Técnica Profunda** (`oklch(0.596 0.17 162.48)`): Hover e estado ativo do acento primário. Usado em `hover:bg-emerald-600`.

### Neutral — Dark Mode (primário)

- **Dark Void** (`oklch(0.145 0 0)`): Fundo principal do tema escuro. Preto suave, quase acromático. Usado em `body` e backgrounds de página.
- **Dark Surface** (`oklch(0.205 0 0)`): Superfícies elevadas — cards, popovers, dropdowns. Um tom acima do fundo, suficiente para criar profundidade sem contraste agressivo.
- **Dark Muted** (`oklch(0.269 0 0)`): Fundos secundários — badges, footer de card, elementos hover de menu. A camada mais clara antes do foreground.
- **Dark Border** (`oklch(0.331 0 0)`): Linhas divisórias, inputs, separadores.
- **Foreground** (`oklch(0.985 0 0)`): Texto principal. Branco suave (não `#fff` puro).
- **Muted Foreground** (`oklch(0.556 0 0)`): Texto secundário, descrições, metadados.

### Neutral — Light Mode (secundário)

- **Light Background** (`oklch(0.985 0 0)`): Fundo principal do tema claro.
- **Light Surface** (`oklch(1 0 0)`): Cards e superfícies no tema claro.
- **Light Muted** (`oklch(0.97 0 0)`): Fundos secundários no tema claro.
- **Light Border** (`oklch(0.922 0 0)`): Linhas divisórias no tema claro.
- **Foreground** (`oklch(0.145 0 0)`): Texto principal no tema claro.
- **Muted Foreground** (`oklch(0.556 0 0)`): Texto secundário no tema claro.

### Semantic

- **Destructive** (`oklch(0.577 0.245 27.325)` / `oklch(0.704 0.191 22.216)` em dark): Exclusivamente para ações destrutivas (deletar, remover, cancelar). Usado em textos e backgrounds de variante destructive.

### Named Rules

**A Regra do Aceno Único.** A Esmeralda Técnica ocupa ≤10% de qualquer tela. Sua raridade é o que a faz funcionar. Se dois elementos competem pelo acento, nenhum dos dois é acento.

**A Regra do Neutro Tintado.** Nenhum neutro é `#000` ou `#fff` puro. Todos são levemente tintados para manter coerência cromática com o ecossistema visual.

## 3. Typography

**Display & Body Font:** Geist (sans-serif técnica, da Vercel)
**Mono Font:** Geist Mono (ui-monospace, SFMono-Regular, monospace)

**Character:** A família Geist é limpa, moderna e técnica sem ser fria. O par sans-serif/mono cobre do título de impacto ao bloco de código, mantendo o espírito de "bancada do desenvolvedor". Sem serifas decorativas — a informação é a decoração.

### Hierarchy

- **Display** (700, `clamp(2.25rem, 5vw, 3.75rem)`, 1.1, `-0.02em`): Títulos de seção e hero. Tracking negativo apertado para impacto. Aparece exclusivamente no hero e headings de seção.
- **Headline** (700, `1.875rem`, 1.2): Subtítulos de seção. Usado em h2 de seções de conteúdo.
- **Title** (600, `1.25rem`, 1.3): Títulos de card, nomes de serviço, labels de link.
- **Body** (400, `1rem` / `0.875rem`, 1.6): Texto corrido, descrições de serviço, bio. Comprimento máximo de linha 65–75 caracteres.
- **Label** (500, `0.75rem` / `0.8125rem`, tracking `0.05em`): Badges de tecnologia, metadados, navegação secundária. Tracking expandido quando em uppercase para legibilidade em tamanho pequeno.
- **Mono** (400, `0.875rem`, 1.5): Blocos de código, terminais, o nome da marca `<Alefsander.DEV />` no header. Também usado em handles de redes sociais.

### Named Rules

**A Regra do Peso que Guia.** A hierarquia é definida por contraste de peso (700 → 400), não por cor ou sublinhado. Se não há contraste de peso, não é hierarquia.

## 4. Elevation

O sistema usa sombras sutis para profundidade, em vez de bordas laterais ou rings no estado de repouso. A filosofia é "planos em repouso, sombra sob demanda": superfícies são planas e limpas até que precisem se distinguir — hover, foco, modal, dropdown.

### Shadow Vocabulary

- **elevation-lo** (`0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)`): Cards em estado de hover, pequenos elementos interativos.
- **elevation-md** (`0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)`): Dropdowns, popovers, tooltips — elementos que flutuam sobre a interface.
- **elevation-hi** (`0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)`): Modais, diálogos de foco máximo.

No tema claro, as sombras usam opacidade reduzida (multiplicar por 0.6) para manter a percepção de elevação sem sujar o fundo claro.

Em estado de repouso, cards e superfícies não têm sombra nem ring — apenas o contraste de cor (Dark Surface sobre Dark Void) já estabelece a hierarquia planar.

### Named Rules

**A Regra do Plano em Repouso.** Superfícies são planas em estado neutro. Sombra aparece apenas como resposta a estado (hover, foco, abertura de modal). Se parece um layout de 2014, a sombra está escura ou grande demais.

## 5. Components

### Buttons

**Caráter:** Técnico e responsivo. Botões têm borda sutil, hover com shift de cor e micro-deslocamento para feedback tátil.

- **Shape:** Cantos suavemente arredondados (8px / `var(--radius-md)`). Borda fina (`1px`) que some no estado default e aparece no hover para variantes outline.
- **Primary:** Fundo Esmeralda Técnica, texto branco. Hover escurece um tom (`bg-emerald-600`). Padding default `8px 20px`.
- **Outline:** Transparente com borda `1px solid var(--border)`. Hover ganha fundo muted e texto foreground.
- **Ghost:** Sem borda nem fundo. Hover ganha fundo muted.
- **Destructive:** Fundo `var(--destructive)` com opacidade 10%. Texto `var(--destructive)`.
- **Link:** Texto primary, underline em hover. Sem padding horizontal.
- **Hover / Focus:** Transição de 150ms ease-out. Focus visível com ring de foco (`focus-visible:ring-3`).
- **Active:** Pressionado desloca 1px para baixo (`active:translate-y-px`).

### Cards

**Caráter:** Contêineres limpos que organizam informação sem competir visualmente.

- **Corner Style:** Cantos arredondados (14px / `var(--radius-xl)`).
- **Background:** Dark Surface no tema escuro, Light Surface no tema claro.
- **Shadow Strategy:** Sem sombra em repouso. Hover do card de link (Links.tsx) ganha `elevation-lo` e borda em Esmeralda Técnica.
- **Border:** `1px solid var(--border)` no tema escuro (`border-zinc-900`), visível mas discreto.
- **Internal Padding:** 24px entre elementos (`gap-6`), padding interno de 16px.
- **Header/Content/Footer:** Divisão estrutural com gap consistente. Footer opcional com fundo muted e borda superior.

### Badges / Chips

**Caráter:** Tags de tecnologia e metadados. Compactas, discretas, ligeiramente elevadas.

- **Shape:** Altamente arredondados (26px / `var(--radius-4xl)`), formato de pílula.
- **Style (secondary):** Fundo Dark Muted, texto Foreground. Sem borda.
- **Size:** `20px` de altura, padding horizontal `8px 16px`, texto `0.75rem` (12px).

### Navigation (Header)

**Caráter:** Barra fixa, transparente (blur) no fundo, com links em linha.

- **Style:** `position: fixed`, fundo translúcido (`bg-zinc-800/10`), backdrop blur, borda inferior sutil.
- **Typography:** Body weight 500, tamanho `0.875rem`.
- **Default / Hover / Active:** Cor neutra → Esmeralda Técnica no hover. Transição suave.
- **Mobile:** Dropdown menu com tema toggle (Light / Dark / System). O logo `<Alefsander.DEV />` em mono permanece visível.
- **Theme Toggle:** DropdownMenu com ícones Sun/Moon animados (rotate + scale).

### Inputs (futuro / potencial)

**Caráter:** Ainda não implementados (formulário de contato é link direto para e-mail). Quando implementados, seguir: stroke sutil (`1px var(--border)`), background transparente, foco com ring verde e glow suave.

## 6. Do's and Don'ts

### Do:

- **Do** usar a Esmeralda Técnica exclusivamente para CTAs, links ativos e indicadores de estado — nunca decorativamente.
- **Do** manter o fundo escuro como padrão visual; o tema claro é suportado mas secundário.
- **Do** usar terminais e blocos de código como elementos narrativos (ex: seção About).
- **Do** dar preferência a badges em pílula para listas de tecnologias e tags.
- **Do** manter hierarquia tipográfica via contraste de peso (700/600/400), não via cor.
- **Do** usar sombras sutis para elevação em hover/estado, e nenhuma sombra em repouso.
- **Do** usar micro-animações de transição (150ms ease-out) em interações de botões e links.
- **Do** espaçar seções com 80px (`py-20`) para dar respiro entre blocos de conteúdo.

### Don't:

- **Don't** usar gradientes em texto (`background-clip: text`). Um acento sólido é suficiente.
- **Don't** usar glassmorphism (blur + backdrop-filter) como padrão decorativo.
- **Don't** usar bordas laterais coloridas (`border-left: 4px solid green`) como acento em cards.
- **Don't** repetir o mesmo card (ícone + título + texto) em grid idêntico — varie o formato.
- **Don't** usar modal como primeira solução para conteúdo adicional; prefira expansão inline.
- **Don't** usar templates SaaS genéricos — sem hero-metric (número grande + label + gradiente).
- **Don't** usar emojis em elementos de interface funcional (botões, links de navegação).
- **Don't** inventar cores além do neutro + Esmeralda Técnica para a interface principal.
