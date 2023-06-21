import { Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { appConfig } from '../config/appConfig'
import userModel from '../modules/user/user.model'
import { responseUtils } from '../utils/response-utils'

const protect = async (
  req: any ,
  res: Response,
  next: NextFunction,
) => {

  
  let token: any
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded:any = jwt.verify(token, appConfig.jwtSecret)
      if (decoded?.id) {
        req.user = await userModel.findById(decoded.id).select('-password')
      }

      next()
    } catch (error:any) {
    return  responseUtils.error({res,error,statusCode:401})
      // res.status(401).json({message:'Not Authroized'})
    }
  }
  if (!token) {
  return  responseUtils.error({res,error:{
      message: 'Not Authorized,No token',
      name: ''
    },statusCode:401})

    // res.status(401).json({message:'Not Authorized,No token'})
  }
}

export const authMiddleware = { protect }