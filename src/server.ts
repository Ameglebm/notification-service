import 'dotenv/config';      // 1️⃣ Carrega variáveis de ambiente
import './config/redis';     // 2️⃣ Inicializa Redis
import app from './app';     // 3️⃣ Importa aplicação

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
    console.log(`🚀 Server running on http://localhost:${PORT}/health`)
})