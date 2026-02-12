# 📩 Notification Service  
### Microserviço de Notificações com Node.js, Express, TypeScript e Redis

Este guia ensina como criar um **microserviço de notificações** do zero utilizando:

- **Node.js**
- **Express**
- **TypeScript**
- **Redis**
- **Worker assíncrono**
- **Arquitetura baseada em fila (Queue Pattern)**

O objetivo é construir uma base sólida, organizada e preparada para evoluir para um ambiente real de microserviços.

---

# 🚀 ETAPA 1 — Criação do Projeto

---

## 🧱 1. Criar a pasta do projeto

```bash
mkdir notification-service
cd notification-service
```

---

## 🧱 2. Inicializar o projeto Node

```bash
npm init -y
```

Isso criará o arquivo:

```
package.json
```

---

## 🧱 3. Instalar dependências principais

```bash
npm install express
```

---

## 🧱 4. Instalar dependências de desenvolvimento

```bash
npm install -D typescript ts-node-dev @types/node @types/express
```

Essas dependências permitem:

- Compilar TypeScript  
- Executar o projeto em modo desenvolvimento  
- Utilizar tipagem para Node e Express  

---

## 🧱 5. Criar configuração do TypeScript

```bash
npx tsc --init
```

Será criado o arquivo:

```
tsconfig.json
```

---

## 🧱 6. Ajustar `tsconfig.json`

Para evitar conflitos entre CommonJS e ESModules (erro comum no TypeScript 5+), configure assim:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

---

## 🧱 7. Ajustar `package.json`

Adicione o script de desenvolvimento:

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts"
}
```

---

# 📁 ETAPA 2 — Estrutura Base do Projeto

---

## 🧱 1. Criar pasta `src`

```bash
mkdir src
```

---

## 🧱 2. Criar estrutura de pastas

Estrutura recomendada:

```
src/
├── config/
│   └── redis.ts
├── controllers/
│   └── notification.controller.ts
├── routes/
│   └── notification.routes.ts
├── services/
│   └── notification.service.ts
├── types/
│   └── notification.types.ts
├── workers/
│   └── notification.worker.ts
├── app.ts
├── server.ts
└── app.http
```

---

## 📌 Organização por Responsabilidade

| Camada        | Responsabilidade                      |
|---------------|----------------------------------------|
| Controller    | Recebe requisições HTTP               |
| Service       | Regra de negócio                      |
| Redis         | Armazenamento e fila                  |
| Worker        | Processamento assíncrono              |
| Types         | Tipagens e contratos                  |

---

# 🔴 ETAPA 3 — Instalar Redis

---

## ✅ 1. Instalar Redis (Ubuntu / Linux)

```bash
sudo apt update
sudo apt install redis-server -y
```

---

## ✅ 2. Habilitar o serviço

```bash
sudo systemctl enable redis-server
sudo systemctl status redis-server
```

---

## ✅ 3. Testar Redis

```bash
redis-cli ping
```

Resposta esperada:

```
PONG
```

---

# 🎯 ETAPA 4 — Conectar ao Redis

---

## 🧱 1. Instalar dependências adicionais

```bash
npm install ioredis uuid dotenv
npm install -D @types/uuid
```

---

## 🧱 2. Criar arquivo `.env`

Na raiz do projeto:

```
.env
```

Adicionar:

```env
PORT=3001
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

---

## 🧱 3. Carregar dotenv no servidor

No topo do arquivo `server.ts`:

```ts
import 'dotenv/config';
```

---

# 🏗 ETAPA 5 — Arquitetura do Microserviço

Arquitetura utilizada:

```
Controller
    ↓
Service
    ↓
Redis (LPUSH)
    ↓
Queue
    ↓
Worker (BRPOP)
```

---

## 🧠 Fluxo de Execução

1. Cliente envia requisição HTTP  
2. Controller recebe a requisição  
3. Service valida e envia para a fila no Redis  
4. Worker escuta a fila  
5. Worker processa a notificação de forma assíncrona  

---

# 🧩 Conceitos Importantes

---

## 📌 Queue Pattern

- A API responde rapidamente  
- O processamento pesado acontece depois  
- Sistema mais escalável  
- Permite retry e controle de falhas  

---

## 📌 Separação de Responsabilidades

| Camada     | Não deve fazer           |
|------------|--------------------------|
| Controller | Regra de negócio         |
| Service    | Lógica HTTP              |
| Worker     | Lógica de API            |

---

# 🏁 Resultado Final

Ao concluir todas as etapas você terá:

- API REST estruturada  
- Conexão com Redis  
- Fila de processamento  
- Worker assíncrono  
- Separação clara de responsabilidades  
- Estrutura preparada para microserviços  

---

# 🚀 Próximos Passos (Evolução)

Você pode evoluir esse projeto adicionando:

- Retry automático  
- Logs estruturados  
- Testes automatizados  
- Docker + Docker Compose  
- BullMQ  
- Integração com Email (Nodemailer)  
- Integração com SMS  
- Webhooks  

---

# 📦 Estrutura Final Esperada

```
notification-service/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── types/
│   ├── workers/
│   ├── app.ts
│   └── server.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

**FIM DO DOCUMENTO**
