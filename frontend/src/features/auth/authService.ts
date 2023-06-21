import { postApi } from '../../api/api'
import { LoginData } from '../../pages/login/login.interface'
import { RegisterFormData } from '../../pages/register/register.interface'
import { setLocalStorage } from '../../utils/appUtils'

const register = async (userData: RegisterFormData) => {
  const data = await postApi({url:"user/add-user",body:userData,authToken:false})
  if (data) {
    setLocalStorage("user",data?.data)

    return data
  }
}

const login = async (userData:LoginData)=>{
  const data = await postApi({url:"user/login-user",body:userData,authToken:false})

  if (data) {
    setLocalStorage("user",data?.data)

    return data
  }
}

const authService = {
  register,
  login
}
export default authService
