import { getApi, postApi } from '../../api/api'
import { OrderData } from '../../pages/add-order/addOrder.interface'

const addOrder = async (orderData: OrderData) => {
  const data = await postApi({ url: 'order/add-order', body: orderData })
  return data
}

const getOrder = async (user_Id:string)=>{
  const data = await getApi(`order/get-order/${user_Id}`,true)
  return data
}

const orderService = {
  addOrder,
  getOrder
}

export default orderService
