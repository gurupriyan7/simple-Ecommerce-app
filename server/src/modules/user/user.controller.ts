import { Request, Response } from 'express'

import { userService } from './user.service'
import { responseUtils } from '../../utils/response-utils'
import { LoginType } from '../../constants/enum'

const createUser = async (req: Request, res: Response) => {
  try {
    const data = await userService.createUser(req.body)
    return responseUtils.success(res, {
      data,
      status: 201,
    })
  } catch (error:any) {
    return responseUtils.error({ res, error,statusCode:400 })
  }
}

const userLogin = async (req: Request, res: Response) => {
  try {
    let data;
    if(req?.query?.login_by===LoginType.google){
       data = await userService.userGLogin(req.body)
    }else{
      data = await userService.userLogin(req.body)
    }
    
    return responseUtils.success(res, {
      data,
      status: 200,
    })
  } catch (error:any) {
    return responseUtils.error({ res, error,statusCode:400 })
  }
}

export const userController = {
  createUser,
  userLogin,
}
