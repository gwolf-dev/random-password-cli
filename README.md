# Random password CLI

O projeto é uma CLI, feita em Node.js, que gera senhas aleatórias de acordo com o que o usuário responde para a CLI o formato da sua senha desejada.

## Como rodar o projeto e gerar as suas senhas :)

Primeiro, você deve estar com o Node.js e NPM instalado no seu computador! Basta baixar o [Node.js](https://nodejs.org/pt) e automaticamente o npm será instalado em conjunto com o Node.

Abra algum terminal da sua preferência. A CLI tem compatibilidade ao inglês(Estados Unidos) e Português(Brasil), basta digitar:

Português: `npm run script`

Inglês: `npm run script-en`

## Caracteres compatíveis:

- Numéricos
- Letras maiúsculas
- Letras minúsculas
- E os demais símbolos/caracteres especiais

No final é gerado a senha no formato de tabela e em lista para ser copiado e utilizado, é algo bem simples mas muito usual no dia a dia.

## Bibliotecas utilizadas em conjunto com o Node.js:

- Eslint e Prettier (Padronização de código)
- [enquirer](https://www.npmjs.com/package/enquirer)
- [cli-color](https://www.npmjs.com/package/cli-color)
