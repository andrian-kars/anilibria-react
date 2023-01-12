import * as yup from 'yup';

export const userSchema = yup.object().shape({
  userEmail: yup
    .string()
    .email('Email must be a valid email address')
    .required('Email is required'),
  userPassword: yup
    .string()
    .min(4, 'Password length must be more tnan 4')
    .required('Password is required'),
});
