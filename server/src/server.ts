import express from 'express'
import cors from 'cors'

import userRoutes from './routes/user-router'
import { appConfig } from './config/appConfig'
import { connectDb } from './utils/db-connection'
import { errorHandler } from './middleWares/auth-middleWare'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

connectDb()

app.use('/api/user', userRoutes)

app.use(errorHandler)

app.listen(appConfig.port, () =>
  console.log(`server started on port ${appConfig.port}`),
)
