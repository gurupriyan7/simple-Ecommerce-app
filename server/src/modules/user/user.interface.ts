export interface CreateUserData {
  name: string
  email: string
  phone_number: string
  password: string
}

export interface LoginData {
  phone_number: string
  password: string
}
