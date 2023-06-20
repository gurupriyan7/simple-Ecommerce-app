import {
  bcryptPassword,
  generateToken,
  verifyPassword,
} from '../../utils/auth-utils'
import { CreateUserData, LoginData } from './user.interface'
import UserModel from './user.model'

const createUser = async (createUserData: CreateUserData) => {
  const { phone_number, password, name } = createUserData
  const user = await UserModel.findOne({ phone_number })
  if (user) {
    throw new Error('User Alredy Exists')
  }
  const hashedPassword = await bcryptPassword(password)

  return await UserModel.create({
    name,
    phone_number,
    password: hashedPassword,
  })
}

const userLogin = async (loginData: LoginData) => {
  const { phone_number, password } = loginData

  const user = await UserModel.findOne({ phone_number })
  if (!user) {
    throw new Error('User Not Found')
  }
  const passwordMatch = await verifyPassword(password, user.password)
  if (!passwordMatch) {
    throw new Error('Invalid Password')
  }

  return {
    _id: user._id,
    name: user.name,
    phone_number: user.phone_number,
    token: generateToken(String(user._id)),
  }
}

export const userService = {
  createUser,
  userLogin,
}
