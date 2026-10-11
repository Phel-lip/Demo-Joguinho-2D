# Demo Joguinho 2D

Protótipo de jogo de plataforma 2D desenvolvido em JavaScript, com movimentação de personagem, plataformas, inimigos, coleta de itens e sistema de pontuação.

O projeto foi criado como uma experiência prática de desenvolvimento de jogos para navegador, explorando lógica de programação e interatividade.

## Demonstração

**Jogue online pelo itch.io:**

https://phel-lip.itch.io/demo-phaser4

## Sobre o Projeto

O Demo Joguinho 2D é um pequeno jogo de plataforma desenvolvido para colocar em prática conhecimentos de programação em JavaScript.

O jogador controla uma personagem que precisa percorrer o cenário, evitar inimigos, coletar itens e alcançar uma chave para concluir o desafio.

O projeto utiliza a biblioteca **Phaser 3** para gerenciar cenas, animações e física do jogo, enquanto o JavaScript implementa as regras e interações.

## Funcionalidades

- Menu inicial com botão para começar o jogo
- Movimentação horizontal e pulo
- Plataformas com detecção de colisões
- Inimigos que reiniciam a partida ao entrar em contato com a personagem
- Coleta de itens que adicionam pontos
- Sistema de pontuação exibido na tela
- Chave que verifica a pontuação necessária para concluir o desafio
- Reinício da partida quando a chave é coletada sem a pontuação necessária

## Controles

- **Seta esquerda:** mover para a esquerda
- **Seta direita:** mover para a direita
- **Seta para cima:** pular

**Objetivo:** coletar as quatro facas, acumulando 40 pontos, e alcançar a chave sem encostar nos inimigos.

## Tecnologias Utilizadas

- **HTML5:** estrutura da página e carregamento do jogo
- **JavaScript:** lógica, movimentação, pontuação e interações
- **Phaser 3:** biblioteca JavaScript utilizada para cenas, física, sprites e animações

## Organização do Código

O projeto utiliza os seguintes arquivos:

- `index.html` — estrutura inicial e carregamento dos scripts
- `main.js` — configurações gerais e inicialização do jogo
- `MenuScene.js` — tela inicial e botão para começar
- `GameScene.js` — cenário, personagem, inimigos, colisões e regras do jogo
- `phaser.js` — biblioteca utilizada pelo projeto
- `assets/` — imagens, sprites e demais recursos visuais

## Como Executar Localmente

Clone o repositório:

```bash
git clone https://github.com/Phel-lip/Demo-Joguinho-2D.git
```

Abra a pasta do projeto no Visual Studio Code e execute o arquivo `index.html` por meio de um servidor local, como a extensão **Live Server**.

O jogo também pode ser acessado diretamente pelo itch.io, sem necessidade de instalação.

## Objetivo e Aprendizados

O principal objetivo foi praticar JavaScript em um contexto diferente do desenvolvimento tradicional de páginas web.

Durante o projeto, foram explorados conceitos como:

- Organização da lógica em funções e condições
- Controle de movimentação e interação com o teclado
- Manipulação de objetos e propriedades
- Sistema de pontuação e verificação de condições
- Organização de arquivos e recursos de um projeto
- Uso de uma biblioteca JavaScript para desenvolver um jogo 2D

Posteriormente, o código foi revisitado e simplificado como parte da evolução dos conhecimentos em desenvolvimento web.

## Autor

**Thasso Holanda**

GitHub: https://github.com
