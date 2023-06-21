import { postApi } from '../../api/api'
import { OrderData } from '../../pages/add-order/addOrder.interface'

const addOrder = async (orderData: OrderData) => {
  const data = await postApi({ url: 'order/add-order', body: orderData })
  return data
}

const orderService = {
  addOrder,
}

export default orderService
