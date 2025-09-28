# Filmes&Tal 🎬
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)](https://spectralive.vercel.app)
[![Made with React](https://img.shields.io/badge/Next.js-15-000?logo=next.js)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)

## 📌 Sobre o projeto
Bem-vindo ao **Filmes&Tal**, um catálogo de filmes interativo construído como um projeto prático para aprofundar os estudos em Next.js e seu ecossistema.

**👉 Acesse o site em produção por aqui: [Filmes&Tal](https://filmesetal.vercel.app)**

### 🚀 Funcionalidades

* **Página Inicial Dinâmica:** Exibe os filmes mais populares do momento, renderizada no lado do servidor (SSR) para dados sempre atualizados.
* **Busca de Filmes:** Permite a busca em tempo real por qualquer filme no banco de dados do TMDb, utilizando as API Routes do Next.js.
* **Páginas de Detalhes:** Cada filme possui uma página de detalhes gerada dinamicamente.
* **Página Estática "Sobre":** Uma página sobre o projeto, gerada estaticamente (SSG) para performance máxima.

## 🛠️ Tecnologias e Conceitos Aplicados

- **Framework Principal** → Next.js
- **Linguagem** → TypeScript
- **API Rest** → The Movie Database (TMDb) API
- **Deploy e CI/CD simplificados** → Vercel

## 🏁 Rodando o Projeto Localmente

Para clonar e rodar esta aplicação em sua máquina, você precisará de [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) (v18.17 ou superior) e um gerenciador de pacotes ([NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)).

Você também precisará de uma chave de API do [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api).

```bash
# 1. Clone o repositório
$ git clone https://github.com/jlucassaldanha/filmesetal.git

# 2. Acesse a pasta do projeto
$ cd filmesetal

# 3. Instale as dependências
$ npm install
# ou
$ yarn install

# 4. Crie o arquivo de variáveis de ambiente
# Crie um arquivo chamado .env.local na raiz do projeto e adicione sua chave da API.
TMDB_API_KEY=SUA_CHAVE_DA_API_AQUI

# 5. Rode a aplicação em modo de desenvolvimento
$ npm run dev
# ou
$ yarn dev

# 6. Abra http://localhost:3000 no seu navegador para ver o resultado.
```

## 📜 Licença
Este projeto está licenciado sob a **MIT License** – veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 📫 Contato

**João Lucas Saldanha**

- **LinkedIn:** [@joao-lucas-saldanha](https://linkedin.com/in/joao-lucas-saldanha/)