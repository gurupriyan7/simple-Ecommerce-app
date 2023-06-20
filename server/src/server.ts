import express from 'express'
import cors from 'cors'

import userRoutes from './routes/user_router'
import orderRouter from './routes/order_router'
import { appConfig } from './config/appConfig'
import { connectDb } from './utils/db-connection'
import { errorHandler } from './middleWares/error_handler'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

connectDb()

app.use('/api/user', userRoutes)
app.use('/api/order', orderRouter)

app.use(errorHandler)

app.listen(appConfig.port, () =>
  console.log(`server started on port ${appConfig.port}`),
)
