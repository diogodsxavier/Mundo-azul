# Mundo Azul

Mundo Azul é uma aplicação web educacional e interativa voltada para crianças e adolescentes, com o objetivo de promover o conhecimento sobre a vida marinha, incentivar a preservação dos oceanos e engajar os usuários em missões e desafios lúdicos.

## ✨ Visão Geral
O projeto oferece uma experiência gamificada, com missões diárias, quiz de perguntas sobre o oceano, galeria de animais marinhos e um sistema de ranking e coleção. A interface é moderna, responsiva e utiliza uma paleta de cores inspirada no oceano.

## 🚀 Funcionalidades Principais
- **Modal de Boas-Vindas Personalizado**: Ao acessar o app, o usuário informa nome e idade, personalizando a experiência.
- **Contexto Global de Usuário Robusto**: Dados do usuário (nome, idade e conquistas) são salvos e persistidos, com verificações para garantir que nunca haja dados indefinidos, tornando o app mais seguro e confiável.
- **Sistema de Conquistas**: Usuários desbloqueiam conquistas ao realizar ações como acertar quizzes ou explorar a galeria. O sistema é reativo e imutável, garantindo feedback imediato e seguro.
- **Dashboard Adaptativo**: Estrutura pronta para dashboards diferentes conforme a idade do usuário (atualmente exibe o dashboard padrão para todos).
- **Dashboard**: Exibe perfil do usuário, missões diárias e extras, progresso na enciclopédia marinha, ranking de usuários e coleção de animais, além de conquistas desbloqueadas.
- **Galeria de Animais**: Visualize e explore diferentes espécies marinhas, com imagens, habitats e curiosidades. Cards animados em cascata. Inclui busca por nome e filtro por status de conservação, com lógica defensiva para evitar erros com dados indefinidos.
- **Quiz Interativo**: Jogo de perguntas e respostas sobre o oceano, dividido em três níveis de dificuldade (Fácil, Médio e Difícil), com feedback animado, pontuação e conquistas.
- **Navegação intuitiva**: Barra de navegação para acesso rápido ao Dashboard, Galeria e Quiz.
- **Animações com Framer Motion**: Transições de página, feedback visual no quiz e animação em cascata na galeria.
- **Mensagens para estados vazios**: UX aprimorada, exibindo mensagens amigáveis quando não há animais ou conquistas a mostrar.

## 🗂️ Estrutura de Pastas
```
Mundo-azul/
├── src/
│   ├── components/
│   │   ├── animals/         # Galeria e cards de animais
│   │   ├── dashboard/       # Dashboard do usuário
│   │   ├── quiz/            # Jogo de perguntas
│   │   └── shared/          # Componentes reutilizáveis (Button, Card, Modal, Navbar, ProgressBar, WelcomeModal)
│   ├── context/             # Contexto global do usuário (robusto e seguro)
│   ├── pages/               # Páginas principais (Dashboard, Galeria, Quiz, AdaptiveDashboardPage)
│   ├── styles/              # Tema e estilos globais
│   ├── assets/              # Imagens e recursos estáticos
│   ├── App.tsx              # Definição das rotas e layout principal
│   └── main.tsx             # Ponto de entrada da aplicação
├── public/                  # (Reservado para assets públicos)
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
├── tailwind.config.js       # Configuração do Tailwind CSS
├── vite.config.ts           # Configuração do Vite
└── README.md                # Este arquivo
```

## 🛠️ Tecnologias Utilizadas
- **React 19**: Biblioteca principal para construção da interface.
- **TypeScript**: Tipagem estática para maior robustez.
- **Vite**: Bundler e servidor de desenvolvimento rápido.
- **Tailwind CSS**: Utilitários para estilização moderna e responsiva.
- **Framer Motion**: Animações fluidas e acessíveis (transições de página, quiz, galeria).
- **Lucide React**: Ícones SVG modernos.
- **React Router DOM**: Gerenciamento de rotas SPA.
- **ESLint**: Padronização e qualidade de código.

## 🧩 Componentes Compartilhados
- **Button**: Botão estilizado, com variantes primária e secundária.
- **Card**: Container visual para agrupar conteúdos.
- **Modal**: Janela modal animada para exibir detalhes ou informações.
- **WelcomeModal**: Modal de boas-vindas para personalização do usuário.
- **Navbar**: Barra de navegação superior.
- **ProgressBar**: Barra de progresso para indicar conquistas.

## 🎨 Tema e Identidade Visual
- Paleta de cores inspirada no oceano: azul profundo, azul médio, ciano, dourado, verde e vermelho para destaques.
- Tipografia principal: 'Poppins', sans-serif.
- Layout responsivo e acessível.

## 🏁 Como Executar o Projeto
1. **Pré-requisitos:** Node.js 18+ e npm.
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
4. Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## 📜 Scripts Disponíveis
- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a build de produção.
- `npm run preview`: Visualiza a build de produção localmente.
- `npm run lint`: Executa o linter para checagem de código.

## 📂 Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por Diogo Xavier e colaboradores. Para dúvidas ou sugestões, abra uma issue ou entre em contato.
