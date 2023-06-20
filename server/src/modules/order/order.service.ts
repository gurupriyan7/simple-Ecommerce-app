import { CreateOrderData, getOrderByUserProps } from './order.interface'
import orderModel from './order.model'

const createOrder = async (data: CreateOrderData) => {
  return await orderModel.create(data)
}

const getOrderByUser = async ({query={},options}:getOrderByUserProps) => {
  return await orderModel.find(query, {}, options)
}

export const orderService = {
  createOrder,
  getOrderByUser,
}
