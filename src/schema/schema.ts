import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
});

export const loginTeacherSchema = yup.object().shape({
  emailteacher: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email"),
  passwordteacher: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
});

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email"),
  username: yup.string().required("Please enter your username"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
});

export const otpSignupSchema = yup.object().shape({
  otp: yup.string().required("Please enter the OTP to register"),
});

export const emailForgetPasswordScheme = yup.object().shape({
  emailForgetPassword: yup.string().required("Please enter your email"),
});

export const resetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your new password"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords do not match")
    .required("Please confirm your new password"),
  otp: yup.string().required("Please enter the OTP to reset your password"),
});

export const changePassSchema = yup.object().shape({
  current: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your current password"),
  new: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your new password"),
  newConfirm: yup
    .string()
    .oneOf([yup.ref("new")], "Passwords do not match")
    .required("Please confirm your new password"),
});

export const createTeacher = yup.object().shape({
  fullname: yup.string().required("Please enter your full name"),
  username: yup.string().required("Please enter your username"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
  confirmPass: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
  date: yup.date().required("Please enter your birthdate"),
  gender: yup.string().required("Please select your gender"),
  subject: yup
    .array()
    .required("Please select subjects")
    .test(
      "is-not-empty",
      "Please select subjects",
      (value) => value.length > 0
    ),
  desc: yup.string().required("Please enter description"),
  avatar: yup.string().required("Please enter avatar"),
});

export const inputChatMess = yup.object().shape({
  inputChat: yup.string().required("Please enter message"),
});

export const createBlog = yup.object().shape({
  title: yup.string().required("Please enter title"),
  previewContent: yup.string().required("Please enter preview content"),
  desc: yup
    .string()
    .min(200, "Description must be at least 200 characters")
    .required("Please enter blog content"),
});
