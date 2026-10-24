# Handoff inicial — Site Nerd Services (24/10/2026)

Lista viva de pendências. Ler em TODA conversa até zerar.
Ao concluir um item: 🔴 → 🟢 com o hash do commit.

## Pendências

- 🔴 **Mapear o repo.** Preencher no `PROJETO.md` a stack, o build, a hospedagem e a estrutura de pastas.
- 🔴 **Padrão visual.** Criar `claude/padrao-visual.md` com os tokens CSS reais do site
  (cores, tipografia, espaçamento, componentes) para o Claude não inventar estilo novo.
- 🔴 **Simulador de preços do OmniNerd.** Pacotes, faixas progressivas de usuário e de ramal,
  módulos avulsos. Casos de teste obrigatórios:
  - Telefonia, 40 ramais, 3 usuários → R$ 1.390
  - Atendimento, 6 usuários → R$ 1.369
  - Completo, 12 usuários → R$ 2.143
  - Completo + Telefonia, 20 usuários e 60 ramais → R$ 3.480
- 🔴 **Gerador de orçamento.** App interno (com login) que monta a proposta em PDF a partir do
  catálogo de itens, com numeração sequencial e histórico por cliente.

## Contexto que o Claude precisa saber

- O site é público e o repositório também: nenhum segredo, token ou dado de cliente no código.
- Preço publicado é compromisso comercial. Número só entra com o Gustavo confirmando.
- A página de clientes não deve conter a Pro Drive (removida em 24/10/2026).
