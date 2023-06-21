import {
  bcryptPassword,
  generateToken,
  verifyPassword,
} from '../../utils/auth-utils'
import { CreateUserData, GLoginData, LoginData } from './user.interface'
import UserModel from './user.model'

const createUser = async (createUserData: CreateUserData) => {
  const { phone_number, password, name ,email } = createUserData
  const user = await UserModel.findOne({ phone_number })
  if (user) {
    throw new Error('User Alredy Exists')
  }
  const hashedPassword = await bcryptPassword(password)

  const newUser = await UserModel.create({
    name,
    phone_number,
    email,
    password: hashedPassword,
  })

  return {
    _id: newUser._id,
    name: newUser.name,
    phone_number: newUser.phone_number,
    token: generateToken(String(newUser._id)),
  }
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

const userGLogin = async (data: GLoginData) => {
  const { email } = data
  console.log(email,'email');
  
  const user = await UserModel.findOne({ email })

  console.log(user,"user");
  
  if (!user) {
    throw new Error('User Not Found')
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
  userGLogin,
}
