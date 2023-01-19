import * as yup from 'yup';

export const emailSchema = yup.object().shape({
  userEmail: yup.string().email().required(),
});

export const passwordSchema = yup.object().shape({
  userPassword: yup.string().min(4).required(),
});
