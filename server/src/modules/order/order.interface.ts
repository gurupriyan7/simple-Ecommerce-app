import { FilterQuery, QueryOptions } from 'mongoose'
import orderModel from './order.model'

export interface CreateOrderData {
  user_Id: string
  sub_total: number
  phone_number: number
}

export interface getOrderByUserProps {
  query?: FilterQuery<typeof orderModel>
  options?: QueryOptions
}
