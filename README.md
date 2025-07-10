# MATC30 Squads - Frontend Development Process

Este documento descreve o processo de desenvolvimento e o padrão de commits adotados no projeto de frontend em sala.

## Processo de Desenvolvimento

1. **Criação da Branch:**
   - Crie uma nova branch a partir da branch `/dev`.
   - Se for uma nova feature, use o prefixo `/feat`.
   - Se for um fix, use o prefixo `/fix`.

2. **Abertura de Pull Request (PR):**
   - Após realizar as modificações, abra um Pull Request (PR) para a branch `/dev`.
   - Outros membros do time validarão e revisarão o PR.

3. **Merge no PR:**
   - Após a validação e aprovação do PR, faça o merge da branch para a branch `/dev`.

4. **Subida para Main:**
   - Após a conclusão de todos os itens validados na branch `/dev`, faça o merge da `/dev` para a `/main`.

## Padrão de Commits

- **Para Features (novas funcionalidades):**
  - **Prefixo:** `FEAT`
  - **Exemplo:** `FEAT: Adicionar tela de login`
  
- **Para Fixes (correções de bugs):**
  - **Prefixo:** `FIX`
  - **Exemplo:** `FIX: Corrigir erro no botão de envio de formulário`
