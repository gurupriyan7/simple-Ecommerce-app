
import { bcryptPassword, generateToken, verifyPassword } from '../../utils/auth-utils';
import { CreateUserData, LoginData } from './user.interface'
import UserModel from './user.model'

const createUser = async (createUserData: CreateUserData) => {
  const { phoneNumber, password, name } = createUserData
  const user = await UserModel.findOne({ phoneNumber })
  if (user) {
    throw new Error('User Alredy Exists')
  }
  const hashedPassword = await bcryptPassword(password)

  return await UserModel.create({
    name,
    phoneNumber,
    password: hashedPassword,
  })
}

const userLogin = async (loginData: LoginData) => {
  const { phoneNumber,password } = loginData
  
  const user = await UserModel.findOne({ phoneNumber })
  if (!user) {
    throw new Error('User Alredy Exists')
  }
  const passwordMatch = await verifyPassword(password, user.password)
  if (!passwordMatch) {
    throw new Error('Invalid Password')
  }

  return ({
    _id:user._id,
    name: user.name,
    phoneNumber: user.phoneNumber,
    token: generateToken(String(user._id)),
  })
}

export const userService = {
  createUser,
  userLogin
}