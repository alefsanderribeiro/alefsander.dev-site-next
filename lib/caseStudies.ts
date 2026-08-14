// Dados estruturados dos case studies das páginas individuais.
// Fonte: research-portfolio/cases/*.md — conteúdo adaptado e SANITIZADO para
// uso público (sem dados internos, credenciais, IPs, portas, domínios internos
// ou nomes de ferramentas de acesso interno).

export interface CaseStudySection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface CaseStudyLink {
  label: string;
  href: string;
  external: boolean;
}

export interface CaseStudy {
  slug: string;
  /** Linha de abertura — leva/hero do case. */
  summary: string;
  sections: CaseStudySection[];
  stack: string[];
  links: CaseStudyLink[];
}

export const caseStudies: Record<string, CaseStudy> = {
  "alef-atelie": {
    slug: "alef-atelie",
    summary:
      "Formação de custo, estoque, financeiro e contabilidade para uma confecção real — tudo num único sistema: navegador e Android.",
    sections: [
      {
        title: "Problema",
        paragraphs: [
          "O problema real era de uma confecção familiar: gestão de produção e custo feita 'na cabeça' e em planilhas. Os pilares da dor:",
        ],
        bullets: [
          "Formação de custo sem método — o preço de venda era definido 'no olho', sem separar matéria-prima, mão de obra direta e custos fixos. O resultado era preço chutado que podia não cobrir o custo ou deixar lucro na mesa.",
          "Custo de insumos disperso — preços de tecido/aviamentos atualizados a mão, sem histórico e sem vínculo com o produto final.",
          "Estoque sem controle — ninguém sabia quanto tinha de insumo, o que estava baixo, e a produção consumia material sem rastreio.",
          "Financeiro manual — caixa, contas a receber/pagar e despesas fixas misturadas; sem saber se o negócio dava lucro de verdade.",
          "Notas fiscais de compra (NF-e) com dados em XML que precisavam ser digitados item a item — lento e sujeito a erro.",
        ],
      },
      {
        title: "Abordagem",
        paragraphs: [
          "Construir um ERP completo de confecção que fosse simples o bastante para a ateliê usar no dia a dia (inclusive no celular Android) e robusto o bastante para cuidar de custo, estoque, financeiro e contabilidade.",
          "Optei por uma stack única (Next.js + React + TypeScript + Tailwind + shadcn/ui + Prisma + PostgreSQL), rodando em containers no servidor. A estratégia Web → Android via PWA faz um único front-end servir navegador e virar app instalável no Android, sem reescrever a UI. Todo o design é mobile-first, pois a ateliê usa no celular.",
        ],
        bullets: [
          "Server Actions com validação de toda entrada, no lugar de uma API REST separada.",
          "Autenticação com sessão e controle de acesso por papel (RBAC) verificado no servidor.",
          "Deploy em Docker com volumes persistentes — o banco e os arquivos das notas fiscais sobrevivem a rebuilds.",
        ],
      },
      {
        title: "Funcionalidades",
        bullets: [
          "Formação de custo / precificação — motor configurável (Markup, Margem de contribuição, Híbrido com mão de obra separada) com insumos, custos fixos, impostos e taxa de cartão; calcula preço sugerido automático e permite preço customizado.",
          "Insumos — cadastro de matéria-prima com estoque, estoque mínimo e rendimento, e catálogos configuráveis.",
          "Conjuntos de peça (BOM) — monta a peça com insumos + quantidades, congelando o custo de cada linha no momento da montagem.",
          "NF-e de entrada com parse de XML — importa a nota, valida dados fiscais e faz matching automático dos itens com insumos existentes, convertendo unidades e rateando fretes/valores.",
          "Financeiro / caixa — lançamentos com soft-delete, contas a receber/pagar, despesas fixas e relatórios (DRE simplificado, rentabilidade por peça, fluxo projetado).",
          "Estoque com journal — registra ENTRADA/SAÍDA/PRODUÇÃO/VENDA/AJUSTE, com alertas de estoque mínimo e geração automática de contas a pagar.",
          "Contabilidade em partidas dobradas — lançamentos balanceados, duplo regime (caixa/competência) e integração automática com o financeiro.",
          "Ordens de Serviço — OS avulsa de costura que consome os insumos do BOM ao concluir, com baixa de estoque validada.",
          "Clientes, pedidos, plano de contas hierárquico e gestão de usuários com RBAC.",
        ],
      },
      {
        title: "Desafios",
        paragraphs: [
          "Os desafios reais e como foram resolvidos:",
        ],
        bullets: [
          "Parse e classificação de NF-e em XML — documentos reais são inconsistentes. Construí um parser tolerante, com precisão decimal, validação fiscal e matching difuso (similariedade) para casar itens da nota com insumos sem exigir cadastro prévio.",
          "Testes que cobrem lógica de negócio — operações compostas usam transações e precisam de banco. Um banco de teste isolado, limpo a cada teste, permitiu 560+ testes automatizados em 47 arquivos, incluindo testes de mutação.",
          "Separação visual DRE vs Balanço — reimplementada do zero: um plano de contas único no banco, mas três visões na tela via poda da árvore mantendo os ascendentes.",
          "Deploy em produção — banco e app em containers separados, na rede Docker interna, com o banco acessado pelo nome do container e não por localhost.",
          "Web + Android via PWA — só funciona em HTTPS. Entreguei o app publicamente com certificado automático, validando login, manifest e service worker.",
          "Dark mode + mobile-first no Android — vários bugs de UI corrigidos (select/dropdown no dark mode, tabelas com scroll horizontal refeitas como cards, badges com contraste ruim).",
          "Segurança de verdade — rate limit no login, headers de segurança e CSP, logs sem stacktrace, erro de login genérico (não enumera usuários) e nunca expor hash de senha.",
        ],
      },
      {
        title: "Resultado",
        paragraphs: [
          "Sistema em produção para uma confecção real, usado no dia a dia (inclusive no Android via PWA instalável).",
          "Cobertura completa do negócio — formação de custo, insumos, peças, estoque, financeiro, pedidos/OS e contabilidade em um único sistema.",
        ],
        bullets: [
          "560+ testes automatizados em 47 arquivos, com banco de teste isolado e testes de mutação.",
          "19 migrations no PostgreSQL 17 e schema Prisma de 1.074 linhas.",
          "Motor de preço configurável substitui a planilha: custo real por peça, margem garantida e histórico auditável.",
          "NF-e de entrada sem digitação — o XML importado vira insumos/estoque/contas a pagar automaticamente.",
        ],
      },
      {
        title: "O que faria diferente",
        bullets: [
          "Testes desde o primeiro dia — os testes vieram conforme o projeto cresceu; começar antes teria evitado regressões.",
          "Fazer o deploy de produção logo no início, não quando o PWA exigiu HTTPS.",
          "Evitar trabalho em paralelo na mesma área de código — foi o que causou um conflito que apagou a primeira implementação do módulo contábil.",
          "Delimitar melhor o MVP contábil, vindo em fases menores após o core (custo + estoque + caixa) estar sólido.",
          "Planejar a migração de dados da planilha de insumos como etapa própria desde o começo.",
        ],
      },
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    links: [
      { label: "Ver demo", href: "https://atelie.alefsander.dev", external: true },
    ],
  },

  "ms-site": {
    slug: "ms-site",
    summary:
      "Um ecossistema digital de ponta a ponta: site institucional com portal de vagas, ouvidoria e candidatos — mais um dashboard interno de 17 módulos — em um só sistema.",
    sections: [
      {
        title: "Problema",
        paragraphs: [
          "Uma empresa de terceirização de mão de obra precisava de presença digital e de uma operação interna que simplesmente não existia de forma organizada:",
        ],
        bullets: [
          "Sem rosto digital — nenhum site institucional confiável que convertesse leads em clientes.",
          "Recrutamento artesanal — sem portal de vagas estruturado, sem trilha de candidatura, sem banco de candidatos.",
          "Sem canal de ouvidoria — sem um canal seguro e anônimo para manifestações, uma lacuna crítica de compliance e clima organizacional.",
          "Gestão em planilhas/gavetas — RH, contratos, folhas e documentos espalhados, sem auditoria e sem rastreabilidade.",
        ],
      },
      {
        title: "Abordagem",
        paragraphs: [
          "Em vez de dois projetos desconexos (site genérico + ERP genérico), a solução foram dois repositórios que formam UM sistema, compartilhando o mesmo banco, design e linguagem visual. O site público expõe o rosto da empresa; o dashboard interno faz a gestão.",
          "Por que Next.js para os dois? Um framework, uma linguagem (TypeScript) e o mesmo ecossistema. Server Components para performance, App Router moderno, e Tailwind + shadcn/ui com acessibilidade embutida (teclado, ARIA, foco).",
        ],
        bullets: [
          "Site público — landing, páginas institucionais, portal de vagas com candidatura, ouvidoria e cadastro de candidatos.",
          "Dashboard interno — 17 módulos protegidos por RBAC (22 permissões): RH, financeiro, contratos, frota, documentos, recrutamento, ouvidoria, auditoria e mais.",
          "Especificação primeiro (Spec-Driven Development) — a spec é a fonte da verdade e toda feature nasce nela antes de virar código.",
        ],
      },
      {
        title: "Funcionalidades",
        bullets: [
          "Site público: landing + institucionais, ouvidoria com fluxo de Q&A por email e protocolo de acompanhamento, portal de vagas e candidatura.",
          "Candidatos: cadastro, login com LinkedIn, perfil de 9 seções e acompanhamento de candidaturas por status.",
          "Dashboard: gestão documental com versionamento e busca, ouvidoria administrativa em kanban, recrutamento, relatórios em PDF/Excel e auditoria total.",
          "Design system compartilhado entre site público e dashboard — 'um sistema, sem surpresas'.",
        ],
      },
      {
        title: "Desafios",
        bullets: [
          "Dois sistemas, um mesmo design — manter consistência visual entre a landing pública e um dashboard denso exigiu um design system restrito: paleta monocromática contida, sem gradientes ou decoração excessiva. 'Confiança através de contenção.'",
          "Migração e dívida técnica — o projeto nasceu dentro de um ecossistema maior que passou por migrações; separar o artefato público foi trabalho de reorganização.",
          "Separação de banco e autenticação por camada — estratégias de auth distintas coexistindo conscientemente, conforme a necessidade de cada superfície.",
          "Testes massivos — manter 1.801 testes com 0 falhas em 125 arquivos exige disciplina, com CI rodando testes, checagem de tipos e lint em todo push.",
          "Deploy em ambientes distintos — site em servidor serverless com banco gerenciado e dashboard em Docker, com variáveis e armazenamento por ambiente.",
        ],
      },
      {
        title: "Resultado",
        bullets: [
          "1.801 testes automatizados — 0 falhas, em 125 arquivos, com 71 factories tipadas validadas contra o schema.",
          "Cobertura completa: server actions, schemas de validação, permissões, componentes de UI, rotas de API e middleware.",
          "Ecossistema entregue — site institucional + portal de vagas + ouvidoria + candidatos + dashboard de 17 módulos com RBAC e auditoria.",
          "Produção — site público em produção, com deploy automático no push; o dashboard gerencia a operação da empresa.",
          "A empresa deixou de 'parecer' profissional para operar profissionalmente — canal único de marca, banco de candidatos estruturado, ouvidoria auditável e gestão rastreável.",
        ],
      },
      {
        title: "O que faria diferente",
        bullets: [
          "Unificar a estratégia de autenticação — ter duas superfícies de segurança para manter gera custo; consolidaria tudo em um único sistema de auth.",
          "Resolver a gestão de migrações do schema desde o início, para migrações versionadas rastreáveis.",
          "Menos escopo no início — 17 módulos é ambicioso; entregaria o núcleo (RH, financeiro, contratos) + site e adicionaria o restante em fases.",
          "Testes de integração com banco real mais cedo — capturam mais bugs de schema que unitários.",
          "Codificar o design system como tokens de design versionados, consumidos pelos dois repositórios.",
        ],
      },
    ],
    stack: ["Next.js", "TypeScript", "React", "Tailwind", "Prisma", "PostgreSQL", "Vitest"],
    links: [
      { label: "Ver site", href: "https://msservicos.com", external: true },
    ],
  },

  "ms-automatizar": {
    slug: "ms-automatizar",
    summary:
      "Automação administrativa com IA: folhas de ponto, holerites, OCR e envio em escala — do papel ao envio sem digitação manual.",
    sections: [
      {
        title: "Problema",
        paragraphs: [
          "O departamento pessoal de uma empresa convivia com um processo 100% manual e repetitivo a cada fechamento de mês e folha: gerar folhas de ponto funcionário por funcionário, renomear dezenas de PDFs à mão, extrair dados de documentos manuscritos, distribuir cada documento ao funcionário certo e cadastrar pessoas e contratos de forma duplicada.",
        ],
        bullets: [
          "A dor central: trabalho repetitivo, demorado e suscetível a erro humano — holerite renomeado errado, folha enviada à pessoa errada, dado digitado errado — sem trilha de auditoria confiável.",
        ],
      },
      {
        title: "Abordagem",
        paragraphs: [
          "Automatizar o fluxo de ponta a ponta: o documento entra sem nome útil e sai identificado, renomeado, persistido e entregue à pessoa certa — sem digitação manual. Uma aplicação CLI empacotada com Python, com um serviço de envio separado rodando em Docker.",
        ],
        bullets: [
          "Identificação automática de documentos por IA com saída estruturada — decide o tipo e vincula funcionário/empresa/competência.",
          "OCR de manuscritos (folhas preenchidas à mão) com extração de datas, horários e totais.",
          "Geração de folhas de ponto do banco → template HTML → PDF, multiplataforma.",
          "Envio em massa por e-mail e WhatsApp, individual ou por grupo, com modo de simulação.",
          "Cache para eliminar re-busca e re-OCR de documentos já processados.",
        ],
      },
      {
        title: "Funcionalidades",
        bullets: [
          "CLI com subcomandos para folhas de ponto, holerites e referências (contratos, horários, funções).",
          "Renomeação inteligente de PDF — detecta o padrão genérico de nome, extrai o nome real e renomeia em paralelo.",
          "OCR de manuscritos via IA + renderização de PDF embutida.",
          "Geração de folhas de ponto do banco → HTML → PDF, com impressão fiel.",
          "Envio (WhatsApp/email) para indivíduos e grupos, com suporte a múltiplos dispositivos por empresa e modo dry-run.",
          "Cache com TTL, invalidação por padrão e cache de OCR por hash para não reprocessar documentos iguais.",
          "CRUD completo + histórico — soft delete, busca fuzzy e auditoria por decorator.",
        ],
      },
      {
        title: "Desafios",
        bullets: [
          "Precisão no OCR de manuscritos — ler folhas preenchidas à mão é notoriamente instável; exigiu combinar modelos com fallbacks.",
          "Formatos de PDF variados — a extração estruturada teve que ser robusta a variações de layout.",
          "Geração multiplataforma — o pipeline original dependia de uma suíte de automação Windows-only; migrei para HTML → PDF, compatível com Linux e portátil.",
          "Integração de um canal de mensagens instável — versões da API mudaram várias vezes, removendo endpoints de autenticação; exigiu pinning de versão e healthcheck dedicado.",
          "Performance no envio em massa — enviar centenas de folhas consultava o banco uma vez por funcionário e por grupo; pré-processei empresas/grupos uma única vez.",
          "Todo o Docker unificado (banco + cache + serviço de envio num único compose), com backup/restore validado.",
        ],
      },
      {
        title: "Resultado",
        bullets: [
          "-95% nas queries ao banco em operações críticas (via cache): envio de 1.000 holerites caiu de 2.000 queries para 1.",
          "-87% de queries no envio com grupos — envio até 5× mais rápido em operações com múltiplos grupos.",
          "Geração de PDFs mais rápida e multiplataforma.",
          "Backup/restore validado em milhares de documentos.",
          "Pipeline de ponta a ponta com histórico e auditoria.",
          "Horas economizadas toda semana: a automação elimina a digitação manual, a renomeação um-a-um de PDFs e o envio individual de cada documento.",
        ],
      },
      {
        title: "O que faria diferente",
        bullets: [
          "Definir a fronteira app web vs CLI mais cedo — uma API + dashboard permitiria acesso multi-usuário.",
          "Testes desde o início com cobertura contínua.",
          "Gerenciar segredos via cofre (chaves de IA e credenciais), não em arquivos locais.",
          "Tratar cache e performance como requisito desde o dia 1, não como acréscimo reativo.",
          "Planejar a estratégia de versão da API de mensageria antes das quebras de compatibilidade.",
        ],
      },
    ],
    stack: ["Python", "CLI", "Redis", "IA", "MongoDB"],
    links: [
      { label: "GitHub", href: "https://github.com/alefsanderribeiro/MS-Automatizar", external: true },
    ],
  },

  forticode: {
    slug: "forticode",
    summary:
      "Escaneando repositórios com um agente de IA dentro de um sandbox que apaga tudo depois — o repositório é hostil, o código não é armazenado, e a IA analisa tudo.",
    sections: [
      {
        title: "Problema",
        paragraphs: [
          "Desenvolvedores querem saber se seus repositórios têm vulnerabilidades — mas quase nunca fazem isso: falta tempo, as ferramentas de segurança são fragmentadas e complexas (SAST, SCA, secrets, DAST — cada uma com seu setup), e não existe um botão 'analise meu repositório' que entregue um relatório acionável. A ideia em uma frase: o usuário faz login com o GitHub, escolhe um repositório, e um agente de IA analisa todos os arquivos procurando vulnerabilidades em um container efêmero isolado que é destruído ao final, sem nunca armazenar o código.",
        ],
      },
      {
        title: "Abordagem",
        paragraphs: [
          "A arquitetura resolve dois problemas ao mesmo tempo: fazer uma análise profunda de verdade e proteger a privacidade do usuário por design — o código do cliente nunca persiste.",
        ],
        bullets: [
          "Fluxo: login com GitHub → seleção do repositório → sistema levanta o projeto num container efêmero isolado → agente de IA + ferramentas de segurança rodam a bateria de testes → relatório gerado → container destruído e código purgado (garantido).",
          "Ponto-chave: só o relatório (achados, severidade, arquivo/linha) persiste no banco; o código-fonte nunca sai do container, roda em armazenamento temporário e é destruído.",
          "Tela de progresso ao vivo via eventos (SSE), com o transcript do agente colapsável ao lado (padrão agent-UI 'work-like').",
          "Regra de ouro 'detect, don't exploit' — o agente detecta a presença de credenciais/achados, mas nunca usa credenciais reais para acessar sistemas de terceiros.",
          "Rede isolada e saída restrita — impede que código malicioso do repositório exfiltre dados.",
        ],
      },
      {
        title: "Funcionalidades",
        bullets: [
          "Wizard de análise em 3 passos com consentimento explícito sobre o processamento em container isolado.",
          "Progresso ao vivo com stepper visual (clone → sandbox → SAST → SCA → secrets → IA → relatório).",
          "Relatório com score geral 0–100 + letra (A–F) e contagem por severidade.",
          "Tabela de achados filtrável (severidade, categoria, arquivo:linha, ferramenta, status) com detalhe.",
          "Cada achado com severidade/CVSS, categoria (CWE/OWASP), explicação e recomendação de correção.",
          "Resumo executivo do agente de IA ('12 problemas, 3 críticos; corrija X primeiro').",
          "Planos de assinatura com cobrança; painel de privacidade com botão 'Apagar todos os meus dados'.",
        ],
      },
      {
        title: "Desafios",
        paragraphs: [
          "O projeto levou a um levantamento profundo, e os desafios são reais e duros — tanto legais quanto técnicos.",
        ],
        bullets: [
          "Legal — código-fonte pode conter dados pessoais (emails, tokens), então o repositório é tratado como dado pessoal. Exige consentimento, minimização, segurança e processo de eliminação (LGPD/GDPR). O consentimento expresso do titular é essencial para escanear, e o produto não pode lançar sem ToS, Política de Privacidade e plano de incidentes.",
          "Sandbox seguro para código hostil — o repositório é inimigo (pode conter malware em dependências). Container puro não basta; uso isolamento reforçado, sem acesso ao host e com rede isolada.",
          "Purga garantida — armazenamento temporário + destruição + verificação de que não sobraram resíduos.",
          "'Levantar o projeto' de forma confiável — cada repositório é diferente; estratégia em camadas com fallback para análise estática se o build falhar.",
          "Custo de IA — ferramentas baratas rodam primeiro e o agente recebe só os achados + contexto relevante, não o repositório inteiro, para controlar custo e janela de contexto.",
          "Proteção contra 'intoxicação de prompt' — o conteúdo do repositório é hostil e pode tentar envenenar o agente; o agente roda dentro do sandbox, com ferramentas limitadas à análise.",
        ],
      },
      {
        title: "Resultado",
        paragraphs: [
          "Status atual: fase de planejamento/levantamento. O conceito está validado com pesquisa completa; o próximo passo é a prova de conceito técnica — clonar um repositório, subir em container isolado, rodar os scanners, gerar relatório e destruir tudo.",
        ],
        bullets: [
          "Pesquisa profunda cobrindo funcional/legal, UI/UX + stack, módulos de análise e pagamento/segurança.",
          "Nome escolhido e documentação pública de visão.",
          "Diferencial: o modelo 'agente de IA sobe o projeto e testa dinamicamente em container efêmero com purga total' é mais profundo que scanners estáticos puros e mais privado que SaaS tradicionais que retêm o código.",
        ],
      },
      {
        title: "O que faria diferente",
        bullets: [
          "Levantamento antes da escrita foi um acerto — a pesquisa profunda veio antes do código e deve ser mantida como padrão.",
          "Escopo do MVP inicialmente amplo demais — para a prova de conceito, o essencial é 1–2 linguagens + análise estática + verificação de segredos em container isolado; o resto vem em fases.",
          "Definir o modelo de IA e o limite de custo antes — pré-requisito para a prova de conceito ser honesta sobre viabilidade.",
          "Validação jurídica não pode ser deixada para o fim — revisar antes de escrever muito código.",
        ],
      },
    ],
    stack: ["Next.js", "TypeScript", "Python", "Docker"],
    links: [],
  },

  "extrator-produtos": {
    slug: "extrator-produtos",
    summary:
      "Ferramenta em produção que transforma um link de produto em um card pronto para postar (imagem + legenda) em segundos, usada diariamente no fluxo de ofertas de um grupo de WhatsApp.",
    sections: [
      {
        title: "Problema",
        paragraphs: [
          "Publicar uma oferta de produto (título, preço, imagem, descrição) exigia copiar manualmente cada dado do marketplace: abrir a página, copiar título e preço (calculando o desconto), baixar a imagem, escrever a legenda e colar tudo na mensagem. Esse processo era lento, repetitivo e propenso a erro — especialmente quando o fluxo precisa publicar várias ofertas por dia. O objetivo: um link entra, um card pronto para postar sai.",
        ],
      },
      {
        title: "Abordagem",
        bullets: [
          "Arquitetura em 3 fases: navegação (abre o link curto, segue o redirecionamento e resolve o produto) → coleta de dados estruturados via API oficial do marketplace → saída (download da imagem validada, persistência em banco e JSON + legenda pronta).",
          "Navegação com browser anti-detecção (fingerprint real) para passar em páginas protegidas por bloqueio de bots; fallback para método clássico.",
          "Fonte de dados confiável via API oficial (preço, desconto, avaliação, frete) — mais estável que fazer scraping do HTML.",
          "Banco centralizado (SQLite) com consulta rápida por código/termo, sem servidor para manter.",
        ],
      },
      {
        title: "Funcionalidades",
        bullets: [
          "Extração por link e por código + link — o link é a fonte de verdade, o código vira rótulo.",
          "Cálculo de preço formatado em R$, com desconto, frete grátis e avaliação.",
          "Persistência central com upsert (código como chave) e consulta rica (por código, últimos, busca, estatísticas).",
          "Guarda anti-sobrescrita — nunca apaga um preço válido do banco com dados vazios de uma extração falha.",
          "Geração de legenda pronta para postar (título, preço, avaliação, frete e link).",
          "Imagem validada por tipo de arquivo antes de usar.",
          "Integração com agentes de IA — retorna JSON puro (imagem + legenda); o extrator nunca posta, apenas prepara o card.",
        ],
      },
      {
        title: "Desafios",
        bullets: [
          "Código de referência não resolvia na busca do marketplace (bug antigo) — resolvido tratando o link de redirecionamento como fonte de verdade.",
          "Bloqueio de navegadores headless por fingerprint nas páginas de produto — contornado com browser anti-detecção e com a API oficial para os dados.",
          "Isolar ambientes — a navegação roda em processo isolado para não interferir com os segredos da etapa de API.",
          "Sobrescrita de dados no banco por extração falha — corrigida com a guarda anti-sobrescrita.",
          "Design para ser chamado como subagente — retornar JSON puro para o agente principal publicar.",
        ],
      },
      {
        title: "Resultado",
        bullets: [
          "Uso diário real — qualquer link recebido dispara a extração automática no fluxo de ofertas.",
          "Imagem + legenda prontos — o agente não precisa montar a legenda; ela já vem com título, preço, desconto, avaliação e link.",
          "Velocidade — de minutos de copiar-e-colar para segundos por produto.",
          "Base de conhecimento — o banco acumula histórico consultável (estatísticas, busca, últimos).",
          "Robustez em camadas — múltiplas estratégias e guarda contra perda de preço.",
        ],
      },
      {
        title: "O que faria diferente",
        bullets: [
          "Backup do banco automático antes de qualquer reextração em massa (um bug já sobrescreveu preços válidos).",
          "Tabela de mapeamento códigos ↔ links persistida, para facilitar recuperação.",
          "Suíte mínima de testes e framework de extração por amostra para regressão.",
          "Gerenciar credenciais da API via cofre, não em arquivos locais.",
          "Abstract as fontes de extração desde a primeira versão, para facilitar multi-marketplace.",
        ],
      },
    ],
    stack: ["Python", "Playwright", "Camoufox", "SQLite"],
    links: [],
  },

  "home-assistant": {
    slug: "home-assistant",
    summary:
      "Automação residencial: controle de lâmpadas por voz, comando e API — self-hosted, com um assistente inteligente como 'controlador da casa'.",
    sections: [
      {
        title: "Problema",
        paragraphs: [
          "As lâmpadas inteligentes foram conectadas primeiro a um assistente de nuvem, mas isso trouxe limitações: apps fragmentados (cada conjunto de dispositivos pedia um app próprio, sem ponto único de controle), sem automação real (só ligar/desligar manual) e sem um 'cérebro' — ninguém consulta a casa, ninguém fala com ela. Faltava um comando por voz prático e, principalmente, um agente de IA capaz de acionar as luzes por linguagem natural.",
        ],
      },
      {
        title: "Abordagem",
        paragraphs: [
          "A solução centralizou tudo em um Home Assistant self-hosted, rodando em Docker no próprio servidor, conectado à nuvem do dispositivo (integração com lâmpadas baseada nessa plataforma). O agente de IA, na rede interna, chama o assistente por API — nada fica exposto ao mundo; o acesso externo acontece por um canal protegido e privado.",
        ],
        bullets: [
          "Controle por linguagem natural (Assist), todo em português.",
          "O agente fala pela casa: delega o comando de voz à integração por REST local, sem expor a casa.",
          "Acesso remoto por rede privada segura para o dono; o painel não fica público.",
          "Configuração versionada (YAML + automações), com dados de runtime fora do versionamento.",
        ],
      },
      {
        title: "Funcionalidades",
        bullets: [
          "Controle por voz / linguagem natural — 'apaga a luz do quarto' é interpretado e executado, reconhecendo cômodos após atribuir áreas aos dispositivos.",
          "Ligar/desligar e brilho — comandos diretos por API e por voz.",
          "Integração com agente de IA — a casa ganha um 'controlador inteligente' que ativa luzes via API.",
          "Acesso remoto seguro — rede privada para o dono; exposição pública opcional por túnel protegido (planejada para o futuro).",
        ],
      },
      {
        title: "Desafios",
        bullets: [
          "Conta da plataforma de dispositivos incompleta causava erros de integração — foi preciso completar o cadastro de desenvolvedor e recriar o projeto no data center correto (o único compatível com o app regional).",
          "Código de vínculo por conta — o vínculo muda ao trocar de conta/app; exigiu consistência.",
          "As lâmpadas precisaram sair do app original e serem adicionadas manualmente no app da plataforma de integração, porque a conta vinculada ao projeto precisa ter os dispositivos.",
          "Hardware é branco ajustável, sem cor RGB — e a temperatura de cor segue bloqueada na integração atual (a resolver com integração local futura).",
          "Ferramenta CLI de gerenciamento quebrou com a versão atual do Home Assistant (endpoint removido) — substituída por chamada direta à API.",
          "Configuração de rede migrada para a interface — sem os proxies certos, o painel atrás do túnel dava erro.",
        ],
      },
      {
        title: "Resultado",
        bullets: [
          "3 lâmpadas controladas por voz (quarto, quarto do casal e sala).",
          "Home Assistant de pé em Docker, com configuração versionada e API REST funcionando.",
          "Acesso externo seguro disponível, base para integração com assistente de voz em nuvem.",
          "Casa parcialmente automatizada — o agente liga/desliga luzes por linguagem natural; o dono controla pelo painel via rede privada.",
          "Projeto consolidado em um dia de trabalho concentrado, da decisão ao marco 'lâmpadas controladas por voz'.",
        ],
      },
      {
        title: "O que faria diferente",
        bullets: [
          "Configurar a conta de desenvolvedor da plataforma de dispositivos completa ANTES, evitando o erro de integração suspensa e o retrabalho.",
          "Usar integração local (sem nuvem) desde o início — teria evitado o bloqueio da temperatura de cor e dado controle mais direto e privado.",
          "Não perder tempo com a API do assistente de nuvem (é SDK-only, sem API REST pública); ir direto ao Home Assistant como hub.",
          "Antecipar a mudança de configuração de rede para a interface, lendo as notas de versão antes.",
        ],
      },
    ],
    stack: ["Python", "Docker", "Home Assistant", "Tuya", "IA"],
    links: [],
  },

  "monitoramento-servidor": {
    slug: "monitoramento-servidor",
    summary:
      "Observabilidade em 3 camadas: uptime (está no ar?), métricas em tempo real (está saudável?) e alertas proativos no Telegram — 100% self-hosted em Docker.",
    sections: [
      {
        title: "Problema",
        paragraphs: [
          "Um servidor self-hosted roda serviços críticos (cofre de senhas, busca, automações, projetos web, banco de dados), mas o problema começava exatamente onde esses serviços importam: downtime silencioso (se um container caísse, não havia como saber até alguém reclamar), zero métricas em tempo real (sem visão de CPU, memória, disco), nada proativo e sem histórico de incidentes. O objetivo: uma solução barata, privada e que avisasse sozinha antes dos problemas virarem caos.",
        ],
      },
      {
        title: "Abordagem",
        paragraphs: [
          "Dividi o problema em duas perguntas complementares, cada uma com a ferramenta certa: 'o serviço está no ar?' (health checks, a camada de detecção — dispara alertas quando algo cai) e 'o serviço está saudável?' (métricas em tempo real e histórico, a camada de diagnóstico — explica por que algo está lento ou prestes a cair).",
        ],
        bullets: [
          "Health checks de containers, endpoints internos/externos e expiração de certificados SSL.",
          "Métricas profundas do servidor inteiro (CPU, RAM, disco, rede, processos) e de cada container, sem configuração extra.",
          "Alertas no Telegram quando um monitor muda de estado.",
          "Painéis acessíveis apenas por rede privada segura — nenhum painel exposto publicamente.",
          "Setup 100% code-first e idempotente: scripts criam e atualizam monitores por API.",
        ],
      },
      {
        title: "Funcionalidades",
        bullets: [
          "26 monitores ativos — dezenas de health checks cobrindo containers, sites internos/externos e certificados SSL.",
          "Alertas Telegram em todos os monitores — mudança de estado chega no celular na hora.",
          "Automação via API — todo o setup é code-first; quando um container novo surge, basta rodar um script para adicioná-lo com alerta já ligado.",
          "Duas camadas complementares — o Kuma diz o que caiu; o Netdata mostra por que.",
        ],
      },
      {
        title: "Desafios",
        bullets: [
          "Imagem do serviço de monitoramento com tag 'latest' quebrada (presa numa versão antiga instável) — resolvido fixando a tag explícita. Lição: sempre fixar tags de imagem em infraestrutura.",
          "Monitores internos davam falso DOWN ao apontar para domínios públicos — resolvido apontando para os containers internos pela mesma rede Docker.",
          "Volume montado na pasta errada após reestruturar o repositório — resolvido copiando o banco para o caminho que o compose realmente monta.",
          "Falso alerta por healthcheck errado de um serviço que retornava erro de autenticação como 'instável' — trocado o healthcheck por um endpoint público.",
          "Automação por API com idempotência — scripts desenhados para rodar de novo sem duplicar.",
        ],
      },
      {
        title: "Resultado",
        bullets: [
          "26 monitores ativos com visibilidade completa do servidor em um só painel.",
          "Alertas automáticos no Telegram — fim do downtime silencioso.",
          "Duas camadas complementares — o que caiu e por quê, dados por container sem config extra.",
          "Setup 100% code-first — reconfigurar é rodar um script idempotente, não clicar na UI.",
          "Custo zero e privado — tudo self-hosted em Docker, painéis acessíveis só via rede privada.",
        ],
      },
      {
        title: "O que faria diferente",
        bullets: [
          "Alertas de métricas também (CPU alta, disco cheio, RAM) — hoje só o uptime alerta; isso pegaria degradação antes da queda.",
          "Validar um teste real de alerta de ponta a ponta em produção.",
          "Resolver a duplicação do volume de dados de monitoramento — um único caminho no compose evita confusão num restore.",
          "Tratar o 'auto-monitoramento' com cuidado — quando o monitor monitora a si mesmo e cai, nenhum alerta sai; uma opção externa evitaria cegueira no serviço que vigia os outros.",
          "Versionar a infra junto com o app — os scripts de automação vivem fora do repositório e idealmente entrariam nele.",
        ],
      },
    ],
    stack: ["Docker", "Uptime Kuma", "Netdata", "Telegram"],
    links: [],
  },

  "alefsander-openclaw": {
    slug: "alefsander-openclaw",
    summary:
      "OpenClaw customizado em Docker: um orquestrador pessoal de agentes de IA self-hosted com voz local (Whisper/GPU), OCR/PDF, automação de navegador e 4 agentes pré-configurados rodando 24/7 — portátil, documentado e reproduzível.",
    sections: [
      {
        title: "Problema",
        paragraphs: [
          "Ter um assistente de IA pessoal, self-hosted e sempre disponível não é trivial. As alternativas 'caixa fechada' têm limitações: dados fora do seu controle, sem integração real com o seu ecossistema, custo recorrente por API em cada operação e sem continuidade (memória de longo prazo). O desafio concreto: rodar uma orquestradora de agentes no próprio servidor, com voz local, OCR, automação de navegador e integração com múltiplos canais — tudo empacotado de forma portátil e reproduzível em Docker.",
        ],
      },
      {
        title: "Abordagem",
        paragraphs: [
          "Construí uma imagem Docker customizada do OpenClaw, com as ferramentas locais embutidas, orquestrada via Docker Compose. Base em Node.js sobre Debian (em vez de Alpine) por compatibilidade com bibliotecas nativas de voz e OCR.",
        ],
        bullets: [
          "Dois serviços: o gateway (servidor) e o CLI interativo (onboarding e comandos).",
          "Persistência via volumes bind mount — o agente só acessa o que está montado (confinamento de workspace).",
          "O agente abriga não um, mas uma equipe de agentes orquestrados, cada um com escopo claro e ferramentas restritas: o principal orquestra, e subagentes especializados fazem o trabalho pesado.",
          "Acesso remoto por rede privada segura, sem abrir portas no roteador e com aprovação de dispositivo por pedido.",
          "Roda como usuário não-root, com healthcheck integrado.",
        ],
      },
      {
        title: "Funcionalidades",
        bullets: [
          "Assistente pessoal 24/7 — acessível por canais diversos (mensageiro, webchat), com memória de longo prazo.",
          "Aceleração de GPU (NVIDIA/PyTorch) para reconhecimento de voz local (Whisper).",
          "Processamento de áudio/vídeo com ffmpeg.",
          "Monitoramento do servidor e dos próprios containers via Uptime Kuma e Netdata, acessíveis pelo agente.",
          "Documentação completa da operação em docs/ e script de setup automatizado (docker-setup.sh).",
          "Voz local — transcrição de áudio sem custo de API, 100% local, com fallback inteligente de GPU para CPU.",
          "OCR + PDF — leitura de documentos escaneados e extração de texto de PDFs.",
          "Automação de navegador — Chromium/Playwright para jobs que exigem browser.",
          "Equipe de agentes orquestrados — o principal delega para subagentes especializados (programação, carreira/vagas, extração de produtos) usando um padrão de 'orquestradora que nunca faz tudo sozinha'.",
          "Integrações com serviços self-hosted — busca privada, cofre de senhas, monitoramento e automação residencial.",
          "Agendamento diário/semanal e checagens proativas periódicas.",
        ],
      },
      {
        title: "Desafios",
        bullets: [
          "Alpine vs Debian — a imagem oficial baseada em Alpine causava incompatibilidade com bibliotecas nativas; a base Debian resolveu com compatibilidade total.",
          "Rede manual em compose — conectar à rede compartilhada é manual e se perde se o container for recriado.",
          "Cache npm no container — instalar plugins falhava por permissão do diretório; resolvido apontando o cache para área temporária gravável.",
          "Hot-reload enganoso — aplica mudanças de config, mas NÃO carrega plugins novos; é preciso reinício real do processo.",
          "Integrações com serviços self-hosted — ajustes de rede, proxy local e lições de rate limit e case-sensitivity de email no cofre de senhas.",
          "Incidente real — uma atualização sobrescreveu o workspace, apagando scripts e bancos; lição: persistência real depende de versionamento e backups.",
        ],
      },
      {
        title: "Resultado",
        bullets: [
          "Ecossistema de agentes rodando 24/7 no servidor pessoal, não na nuvem de terceiros.",
          "Repositório público com documentação completa (docs/) e script de setup automatizado (docker-setup.sh).",
          "Imagem reproduzível que espelha a instalação real em produção.",
          "Usado diariamente para automações reais: extração de produtos, monitoramento de infra, automação residencial, sincronização de contas, buscas privadas e cofre central de credenciais.",
          "Projeto público no GitHub, documentado em português e inglês, com script de onboarding para iniciantes.",
          "Prova de conceito de 'plataforma de agentes pessoal' — como empacotar uma orquestradora de IA com ferramentas locais numa imagem reproduzível.",
          "Base reutilizável para os demais projetos, que rodam na mesma infra Docker.",
        ],
      },
      {
        title: "O que faria diferente",
        bullets: [
          "Versão e backup primeiro — o incidente do workspace mostrou que todo update deve ser precedido de snapshot; automações críticas devem sair do workspace e ir para o repositório versionado.",
          "Plugins como parte da imagem, não em runtime — torna a imagem 'já pronta' ao subir.",
          "Automatizar a rede externa do compose, para não se perder em recriações.",
          "Menos segredos em vias improvisadas — padronizar um endpoint seguro para o container acessar credenciais.",
          "Documentar a 'teoria' junto da prática, consolidando as lições operacionais num único guia.",
          "Versão atual implementou boa parte destas lições: documentação em docs/, versionamento das automações e docker-setup.sh para onboarding replicável.",
        ],
      },
    ],
    stack: ["Docker", "Node.js", "Python", "OpenClaw", "Whisper", "OCR", "Playwright", "ffmpeg", "Tailscale"],
    links: [
      { label: "GitHub", href: "https://github.com/alefsanderribeiro/alefsander-openclaw", external: true },
    ],
  },

  searxng: {
    slug: "searxng",
    summary:
      "Metabusca privada self-hosted para buscas sem rastreamento — o motor de busca padrão de um ecossistema de agentes de IA, sem chave de API e sem depender de terceiros.",
    sections: [
      {
        title: "Problema",
        paragraphs: [
          "A busca web dos agentes de IA usava um provedor público padrão como engine. Em um certo ponto o serviço passou a bloquear o IP do datacenter onde os agentes rodam, retornando um desafio de detecção de bots. Isso quebrava quase tudo que dependia de pesquisa web — os agentes ficavam cegos para a internet sem aviso útil. O objetivo: uma solução de busca privada, sem rastreamento, sem chave de API e confiável, que não dependesse de um provedor terceiro podendo bloquear os IPs dos agentes.",
        ],
      },
      {
        title: "Abordagem",
        paragraphs: [
          "A solução foi self-hostear uma metabusca: um projeto open-source que agrega centenas de engines de busca (gerais, de código e de bibliotecas) em uma única interface, sem chave de API e sem limite de buscas.",
        ],
        bullets: [
          "Container Docker com exposição apenas na rede interna — sem porta pública, evitando conflito no host.",
          "Acesso ao painel web apenas por rede privada segura, por um proxy protegido.",
          "Os agentes consultam pela rede interna em uma interface JSON programática; o navegador usa a interface web.",
          "Configuração com pesos por prioridade e proteção contra abuso.",
        ],
      },
      {
        title: "Funcionalidades",
        bullets: [
          "Busca privada sem rastreamento — não guarda histórico por usuário, não entrega dados a terceiros.",
          "Centenas de engines em uma interface — gerais (Google, Bing, Brave, Startpage...) + especializados em código (GitHub, GitLab, StackExchange) e bibliotecas (npm, PyPI, crates.io).",
          "Provider padrão do web_search dos agentes — integração via plugin, sem chave de API, sem rate limit.",
          "Interface web própria, traduzida para o português, acessível na rede privada.",
          "Saída JSON habilitada — essencial para os agentes consumirem os resultados programaticamente.",
        ],
      },
      {
        title: "Desafios",
        bullets: [
          "Bloqueio do provedor público de busca original — o gatilho de tudo; a decisão de self-hostear em vez de só trocar de provider.",
          "Hot-reload não carrega plugins novos — foi preciso reinício real do processo após instalar o plugin de integração.",
          "Cache npm no container — a permissão do diretório bloqueava a instalação; resolvido com cache alternativo em área gravável.",
          "Paths protegidos na configuração do gateway — o gerenciador bloqueava edição via interface; a saída foi usar a CLI de configuração.",
          "Chave secreta nunca commitada — o arquivo de config no git guarda só um placeholder, e a imagem gera uma secret aleatória sozinha na primeira subida.",
        ],
      },
      {
        title: "Resultado",
        bullets: [
          "12/12 testes de validação passando — busca em português, inglês, atualidade, operador de site, busca técnica e teste de estresse com múltiplas buscas simultâneas.",
          "Latência média de cerca de 1,5s por busca — aceitável para uso dos agentes.",
          "Zero bloqueio de bot e zero limite de requisições — o problema original desapareceu; domínios oficiais nos resultados.",
          "Busca privada funcional para todos os agentes do ecossistema.",
          "Privacidade de verdade — busca self-hosted, sem rastreamento, na rede privada do servidor.",
        ],
      },
      {
        title: "O que faria diferente",
        bullets: [
          "Identificar o bloqueio do provedor original mais cedo — um monitoramento proativo da busca teria antecipado o problema.",
          "Planejar o reinício como parte da instalação de plugin, já que hot-reload não carrega plugins novos.",
          "Preparar o cache alternativo antes nas instruções de instalação.",
          "Subir a metabusca já com o plugin de integração instalado junto no mesmo fluxo de deploy.",
          "Documentar os paths protegidos da configuração no README, para manutenção futura.",
        ],
      },
    ],
    stack: ["SearXNG", "Docker"],
    links: [],
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
