# Desafio de Testes Automatizados de API - Serverest.dev
Este projeto foi desenvolvido como parte de um desafio técnico de testes automatizados de API, utilizando a Serverest.dev, uma API pública voltada para estudos e práticas de QA.

O objetivo é validar endpoints críticos das principais funcionalidades do sistema: Login, Usuários, Produtos e Carrinhos, garantindo que as respostas da API estejam de acordo com os comportamentos esperados.

---

## Instalação do Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/adrianycaroline/desafio-api-QA.git
2. Acesse o diretório do projeto:
   ```bash
    cd desafio-api-QA
3. Instale as dependências:
   ```bash
   npm install
4. Execute o Cypress
   ```bash
   npx cypress open
## Cenários Automatizados

### Login
  1. Login com credenciais válidas (200)
  2. Login com credenciais inválidas (401)
  3. Tentativa de login com campos vazios (possível cenário adicional)

### Usuários
  1. Cadastro de novo usuário com sucesso (201)
  2. Cadastro de usuário duplicado (400)
  
### Produtos
  1. Cadastro de novo produto (201)
  2. Cadastro de produto com nome já existente (400)
  
### Carrinhos
  1. Cadastro de carrinho sem produtos (400)
  2. Cadastro de carrinho sem autenticação (401)

## Motivo da escolha
Os cenários foram selecionados com foco em cobrir os fluxos mais críticos e recorrentes da API, garantindo que cada funcionalidade principal fosse validada nos dois pontos mais relevantes: sucesso e falha.
1. Login:
Escolhido por ser o ponto de entrada da aplicação e essencial para a autenticação de qualquer outra requisição. Testar o sucesso e a falha garante que o controle de acesso funcione corretamente.
2. Usuários:
O cadastro é uma operação fundamental em qualquer sistema. Automatizar tanto o cenário de sucesso quanto o de duplicidade valida as regras de negócio relacionadas à criação de contas.
3. Produtos:
Testar o cadastro e a tentativa de duplicação cobre regras importantes de consistência de dados, além de garantir que o sistema lide corretamente com conflitos e erros de integridade.
4. Carrinhos:
Cenários relacionados a carrinhos simulam o comportamento de compras em um e-commerce. O teste sem produtos e o teste sem autenticação asseguram que a API possua as devidas validações antes de permitir a criação de pedidos.

## Tecnologias Utilizadas
1. Cypress
2. Node.js
3. JavaScript (ES6)

## Autor
Adriany Caroline
