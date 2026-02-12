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
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",

    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",

    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
Adiconar esse packjson

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",

    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",

    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
tsConfig

Depois criar o app e o server