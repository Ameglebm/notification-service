import express from 'express'
import notificationRoutes from './routes/notification.routes';
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json())
app.get('/health', (req, res) => {
    return res.status(200).json({
        status: 'ok'
    })
})
app.use(notificationRoutes)
export default app