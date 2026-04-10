# FinTechX AI

> Assessment técnico — Laborit Engineering

**[fintechx-ai.vercel.app](https://fintechx-ai.vercel.app)**

---

## O Desafio

Desenvolver uma interface de chat inteligente para a FinTechX que funcione como assistente virtual, respondendo dúvidas de clientes em tempo real com linguagem natural e experiência fluida.

---

## Solução

Aplicação web responsiva com fluxo de onboarding → chat vazio com apresentação das capacidades → conversa com o assistente, contextualizado para responder sobre produtos, serviços, segurança e atendimento da FinTechX.

---

## Tecnologias e motivações

**Vite + React + TypeScript** — setup leve e rápido, sem overhead desnecessário para o escopo do projeto. TypeScript garante segurança de tipos em toda a aplicação.

**Tailwind CSS** — agilidade na estilização com design system consistente via tokens customizados, sem sair do HTML.

**Gemini 2.5 Flash Lite (Google AI)** — modelo escolhido pela disponibilidade gratuita via Google AI Studio, estabilidade e qualidade de respostas em português. A integração é feita diretamente pelo SDK oficial `@google/genai`.

---

## A integração com LLM

O assistente usa o modelo `gemini-2.5-flash-lite` via SDK oficial do Google. O histórico completo da conversa é enviado a cada requisição, mantendo o contexto. O comportamento é controlado por um `systemInstruction` que define a persona da FinTechX, produtos, canais, políticas de segurança e regras como responder sempre em português e nunca inventar informações.

---

## Funcionalidades

- Onboarding
- Estado vazio do chat com apresentação das capacidades
- Scroll automático, typing indicator e foco no input após resposta
- Copiar mensagens
- Regenerar última resposta
- Links clicáveis nas respostas
- Toast de erro e persistência do onboarding via localStorage

---

## Estrutura do projeto

```
src/
├── assets/
│   ├── ai.png
│   ├── robot.jpg
│   └── user.png
├── components/
│   ├── chat/
│   │   ├── ChatAIMessage.tsx
│   │   ├── ChatInput.tsx
│   │   ├── ChatInstructions.tsx
│   │   ├── ChatMessageList.tsx
│   │   ├── ChatUserMessage.tsx
│   │   ├── RegenerateButton.tsx
│   │   └── TypingIndicator.tsx
│   └── onboarding/
│       └── OnboardingSlide.tsx
├── constants/
│   ├── chat.ts
│   └── onboarding.ts
├── hooks/
│   ├── useChat.ts
│   └── useOnboarding.ts
├── screens/
│   ├── ChatScreen.tsx
│   └── OnboardingScreen.tsx
├── services/
│   └── chatService.ts
├── types/
│   └── chat.ts
├── utils/
│   ├── cn.ts
│   └── parseLinks.tsx
├── App.tsx
├── index.css
└── main.tsx
```

---

## Como rodar localmente

**Pré-requisitos:** Node.js 20+

**1. Clone o repositório**

```bash
git clone https://github.com/iranbatista/laborit-assessment.git
cd laborit-assessment
```

**2. Instale as dependências**

```bash
npm install
```

**3. Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz:

```
VITE_GEMINI_API_KEY=sua_api_key_aqui
```

Obtenha sua chave gratuitamente em [aistudio.google.com](https://aistudio.google.com).

**4. Rode o projeto**

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

---

## CI

O projeto usa GitHub Actions para rodar lint e verificação de formatação a cada push ou PR na branch `main`.

```bash
npm run lint
npm run format:check
```

---

## Scripts disponíveis

| Script                 | Descrição                       |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento     |
| `npm run build`        | Build de produção               |
| `npm run lint`         | Verifica erros de lint          |
| `npm run format`       | Formata o código com Prettier   |
| `npm run format:check` | Verifica formatação sem alterar |
