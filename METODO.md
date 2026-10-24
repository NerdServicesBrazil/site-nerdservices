# METODO.md — Método de trabalho do Site Nerd Services (ler no INÍCIO de toda conversa)

> Fonte única do método deste repositório (site institucional + apps web de nerdservices.com.br).
> Irmão do `METODO.md` do OmniNerd: mesma filosofia, adaptado para um repo público, estático e com deploy simples.
> Mudou o método → o Claude atualiza ESTE arquivo e entrega na pasta de updates.
> Em conflito com handoff ou memória antiga, vale este arquivo.
> Revisão: 24/10/2026 (criação, derivado do METODO.md do OmniNerd).

## 0. Início de conversa (nesta ordem)
1. Este METODO.md.
2. `claude/handoff-*.md` mais recente (lista viva de pendências 🟢/🔴). Ao concluir um item, o Claude
   atualiza o arquivo (🔴 → 🟢, com o commit); item novo entra nele.
3. O FIM do `PROJETO.md` deste repo (últimas seções + "próximos passos").
4. `claude/padrao-visual.md` ANTES de mexer em qualquer tela.
5. Responder SEMPRE em português do Brasil.
6. Segredos (tokens, senhas, chaves de API, dados de cliente) que passarem pelo chat:
   NUNCA gravar em arquivo, no projeto ou na memória. No repo, só `.env.example` com placeholders.

## 1. Quem decide / estilo
- Gustavo é dev único e product owner. Toda decisão passa por ele.
- Direto, sem vai-e-vem; comandos prontos para colar; um bloco único.
- Decisões em aberto: lista numerada com proposta; ele "crava" e aí executa.
  Interpretação minha de algo ambíguo = dizer explicitamente na entrega.
- Mudança estrutural: mostrar estado atual + plano curto antes de gerar o pacote.
- Diagnóstico por EVIDÊNCIA (log, output, print do navegador). Na dúvida, pedir o que decide.
- Honestidade: remendos empilhando → dizer que precisa de pausa/reescrita.

## 2. O que vive neste repositório
- Site institucional nerdservices.com.br: páginas, textos, imagens, formulários.
- Apps web da Nerd Services (ex.: simulador de preços, gerador de orçamento) — cada app em sua pasta.
- `claude/` — handoffs, padrão visual e notas de sessão.
- `PROJETO.md` — documento vivo: o que existe, decisões, próximos passos.
- NÃO vive aqui: código do OmniNerd, dados de cliente, PDFs de proposta assinados.

> **A preencher na primeira sessão:** stack e build do site (framework, gerenciador de pacotes,
> comando de build), onde está hospedado, domínio e como é publicado, e a estrutura de pastas real.

## 3. Ler antes de alterar (GitHub é SOMENTE LEITURA para o Claude)
- Leitura pelo MCP `github__get_file_contents`: listar a PASTA → `download_url` com token
  (vale ~2–3 min) → `curl` no container logo em seguida. Token vencido = "404: Not Found".
- Arquivo grande: o MCP grava a saída em disco; extrair o campo `content` com Python.
- SEMPRE conferir `git hash-object` do baixado = `sha` do GitHub.
- `list_commits`: perPage 3–5.
- Proibido ao Claude: commit, push, branch, PR, escrita via MCP. Commits são do Gustavo.
- Nunca editar de memória: ler o estado atual do arquivo antes de propor mudança.

## 4. Ao editar
- Patch ancorado: cada âncora existe exatamente 1 vez, senão aborta sem gravar.
  O script RECOMEÇA da base a cada execução (`rm -rf new; cp -r orig new`).
- Arquivo novo ou reescrita grande: entregar o arquivo completo, não trecho.
- Padrão visual: tokens CSS em arquivo `.css`, sem estilo novo inline.
- Conteúdo em português do Brasil; aspas tipográficas no texto exibido.
- Página pública: responsiva (celular 390 px), modo claro e escuro, e sem bloquear o conteúdo
  por JavaScript (o visitante tem que ler o texto mesmo se um script falhar).

## 5. Validar antes de entregar (obrigatório)
- Balanceamento `{}()[]`; `bash -n` nos scripts; CSS por postcss + css-tree; HTML sem tag aberta.
- TypeScript/JS: `tsc --strict` ou esbuild na base × alterado, "nenhum erro novo".
- Tela nova ou alterada: harness visual (esbuild + Playwright) em PC e celular 390,
  claro e escuro, antes × depois, sem erro de console. Prévias `.png` no pacote.
- Formulário: testar envio com campo vazio, campo inválido e envio duplicado.
- App com cálculo (orçamento, simulador): tabela de casos esperados no próprio pacote,
  rodada antes da entrega. Preço errado em público é pior que bug de layout.
- Dizer claramente o que NÃO foi validado.

## 6. Entrega (formato padrão)
- Pasta da fatia: `updates\<AAAAMMDD>_<TAG>\` na pasta local do site. Nunca arquivos soltos na raiz.
  Só a versão FINAL da fatia.
- Conteúdo: arquivos alterados, `<TAG>.md5`, `DEPLOY_<TAG>.txt` (o que fazer, na ordem),
  `COMMIT_<TAG>.txt` (separado), `NOTAS_<TAG>.md` (feito, decisões/suposições, testes, riscos,
  o que conferir no ar), `*.png` opcionais.
- Informar o MD5 de cada arquivo entregue. Divergência no destino = upload parcial, subir de novo.
- Fatias encadeadas: a base da fatia é a saída da anterior; escrever "aplicar depois de <TAG>".

## 7. Commits e documentação
- Um commit por fatia (COMMIT_<TAG>.txt): o quê + porquê + como + abordagens descartadas.
- PROJETO.md: a seção da fatia entra no fim do arquivo, nunca reescrever o arquivo inteiro.
- Fim de sessão: handoff `claude/handoff-<data|fatia>.md` (estado, commits, próximos passos,
  diagnósticos fechados, lições).
- `git status` limpo no fim.

## 8. Cuidados próprios de site público
- Repositório público: nada de token, chave, e-mail pessoal ou telefone de cliente no código.
- Preço publicado é compromisso comercial: só alterar com o Gustavo confirmando o número.
- Logo e marca de cliente só com autorização; ao remover um cliente da página, remover a imagem também.
- Texto institucional não promete prazo nem percentual que o contrato não cubra.
- Acessibilidade mínima: contraste, `alt` em imagem, foco visível, formulário com `label`.
