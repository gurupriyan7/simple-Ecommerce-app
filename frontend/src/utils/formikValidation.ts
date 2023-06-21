import * as Yup from 'yup'

export const signInValidation = Yup.object({
  phone_number: Yup.string()
    .matches(/^\d{10}$/, 'Invalid mobile number')
    .required('Mobile number is required'),
  password: Yup.string().required('Password is required'),
})
