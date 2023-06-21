import * as Yup from 'yup'

export const signInValidation = Yup.object({
  phone_number: Yup.string()
    .matches(/^\d{10}$/, 'Invalid mobile number')
    .required('Mobile number is required'),
  password: Yup.string().required('Password is required'),
})

export const signupValidation = Yup.object({
  name: Yup.string().required('Name is required'),
  phone_number: Yup.string()
    .matches(/^\d{10}$/, 'Invalid mobile number')
    .required('Mobile number is required'),
  password: Yup.string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters'),
})

export const orderValidation = Yup.object({
  phone_number: Yup.string()
    .matches(/^\d{10}$/, 'Invalid mobile number')
    .required('Mobile number is required'),
  sub_total: Yup.string()
    .required('Amount is required')
    .min(1, 'Amount must be at least 1'),
})
