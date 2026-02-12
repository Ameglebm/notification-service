npm init -y para começar

Dependências principais

npm install express
npm install -D typescript ts-node-dev @types/node @types/express

Criar configuração do TypeScript
npx tsc --init

criar: 
    Pasta src
        server.ts
        app.ts
Erro é clássico de conflito entre CommonJS e ESModules no TypeScript 5+.
{
  "name": "notification-service",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/express": "^5.0.6",
    "@types/node": "^25.2.3",
    "express": "^5.2.1",
    "ts-node-dev": "^2.0.0"
  }
}
package.json

Depois criar o app e o server