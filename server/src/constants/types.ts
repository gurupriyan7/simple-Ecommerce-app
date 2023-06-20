import { Request } from 'express'

interface User {
  [x: string]: string
  name: string
  phone_number: string
  _id: string
}

export interface RequestType extends Request {
  user?: User
}
