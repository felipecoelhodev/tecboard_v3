# TecBoard_v3

Uma plataforma moderna para listagem e acompanhamento de eventos de tecnologia. Construída para demonstrar os conceitos mais recentes do **Next.js 15** e do **React 19**, enfatizando a separação entre *Server Components* e *Client Components*. Ainda em desenvolvimento.

## Tecnologias Utilizadas

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Biblioteca UI:** [React 19](https://react.dev/)
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Linter & Formatter:** [Biome](https://biomejs.dev/)
* **Mock de API:** [JSON Server](https://github.com/typicode/json-server) (v1.0.0-beta)
* **Gerenciador de Pacotes:** [pnpm](https://pnpm.io/)

## Arquitetura

O projeto utiliza uma abordagem híbrida de renderização:
* **Server Components (`EventsList`):** Responsável por fazer o fetch de dados diretamente do `json-server`, garantindo performance e SEO.
* **Client Components (`EventCard`):** Responsável pela interatividade do usuário, gerenciando estados (`useState`) como o botão de "Curtir".

## Como executar o projeto localmente

### Pré-requisitos
* Node.js instalado
* [pnpm](https://pnpm.io/installation) instalado

### Passo a passo

1. **Clone o repositório e instale as dependências:**
   ```bash
   pnpm install
   ```
2. Inicie a API Mockada (JSON Server):
Em um terminal, rode o comando abaixo para disponibilizar os eventos na porta 3001:

   ```bash
   pnpm run json-server
   ```
3. Inicie o servidor de desenvolvimento:
Abra um novo terminal (mantendo o anterior rodando) e execute:

  ```bash
  pnpm dev
  ```
4. Acesse a aplicação:
Abra http://localhost:3000 no seu navegador.
