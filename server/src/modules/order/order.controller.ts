import { Response } from 'express'
import { orderService } from './order.service'
import { responseUtils } from '../../utils/response-utils'
import { RequestType } from 'constants/types'
import { getPaginationOptions } from '../../utils/pagination-utils'

const createOrder = async (req: RequestType, res: Response) => {
  try {
    if (!req?.user) {
      throw new Error('User Not found')
    }
    const data = await orderService.createOrder({
      ...req.body,
      phone_number: req.user?.phone_number,
      user_Id: req.user?._id,
    })
    return responseUtils.success(res, {
      data,
      status: 201,
    })
  } catch (error:any) {
    return responseUtils.error({ res, error })
  }
}

const getOrderByUser = async (req: RequestType, res: Response) => {
  try {
    if (!req?.user) {
      throw new Error('User Not found')
    }

    const { user_Id="" } = req?.params
    const {limit=10,page=1}=req?.query
    const paginationOptions = getPaginationOptions({
      limit,
      page,
    })

    const data = await orderService.getOrderByUser({
      query: { user_Id },
      options: {
        ...paginationOptions,
        sort: { updatedAt: -1 },
      },
    })

    return responseUtils.success(res, {
      data,
      status: 200,
    })
  } catch (error:any) {
    return responseUtils.error({ res, error })
  }
}

export const orderController = {
  createOrder,
  getOrderByUser,
}
