# site-nerdservices

Site institucional da Nerd Services — https://nerdservices.com.br

Página única que apresenta a empresa e o OmniNerd (atendimento omnichannel com telefonia,
WhatsApp oficial, Telegram, chat do site e Instagram, com IA e CRM nativo).

## Stack

- Vite + React + Tailwind CSS 4 (tema no `@theme` de `src/index.css`)
- Lint: oxlint

## Comandos

```bash
npm ci          # instala as dependências
npm run dev     # servidor local de desenvolvimento
npm run lint    # verifica o código
npm run build   # gera a pasta dist/
```

## Estrutura

- `index.html` — SEO, Open Graph, dados estruturados da empresa, conteúdo `<noscript>`
- `src/App.jsx` — todas as seções do site
- `src/index.css` — identidade visual (cores, botões, cartões de vidro, animações)
- `public/` — imagens, logos de clientes e páginas legais (`privacidade/`, `termos/`, `exclusao/`)

## Publicação

O conteúdo de `dist/` é publicado em `/var/www/nerdservices/html/` no servidor.

---
© Nerd Services® · L. Gustavo Gomes Galvão Tecnologia · CNPJ 26.356.334/0001-96
