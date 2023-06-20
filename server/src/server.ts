import express from "express";
import cors from 'cors'
import { appConfig } from "./config/appConfig";

const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(appConfig.port, () =>
  console.log(`server started on port ${appConfig.port}`),
)