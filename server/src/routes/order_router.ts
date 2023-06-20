import express from 'express'
import { orderController } from '../modules/order/order.controller'
import { authMiddleware } from '../middleWares/auth_middleWare'

const router = express.Router()
const { protect } = authMiddleware
const { createOrder,getOrderByUser } = orderController

router.post('/add-order',protect, createOrder)
router.get("/get-order/:user_Id",protect,getOrderByUser)

export default router
