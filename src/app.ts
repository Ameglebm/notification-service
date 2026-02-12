import express from 'express'
import notificationRoutes from './routes/notification.routes';

const app = express()
app.use(express.json())

app.get('/health', (req, res) => {
    return res.status(200).json({
        status: 'ok'
    })
})
app.use(notificationRoutes)
export default app