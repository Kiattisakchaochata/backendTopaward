import * as yup from 'yup'

// ✅ สมัครสมาชิกปกติ
export const registerSchema = yup.object({
  name: yup.string().required('กรุณาระบุชื่อ'),
  email: yup.string().email('รูปแบบอีเมลไม่ถูกต้อง').required('กรุณาระบุอีเมล'),
  password: yup
    .string()
    .min(6, 'รหัสผ่านต้องมากกว่า 6 ตัวอักษร')
    .required('กรุณาระบุรหัสผ่าน'),
})

// ✅ เข้าสู่ระบบปกติ
export const loginSchema = yup.object({
  email: yup.string().email('รูปแบบอีเมลไม่ถูกต้อง').required('กรุณาระบุอีเมล'),
  password: yup.string().required('กรุณาระบุรหัสผ่าน'),
})

// ✅ เข้าสู่ระบบด้วย Google OAuth
export const googleOAuthSchema = yup.object({
  id_token: yup
    .string()
    .transform((v) => (typeof v === 'string' ? v.trim() : v))
    .required('กรุณาส่ง id_token ของ Google'),
})

// ✅ เข้าสู่ระบบด้วย Facebook OAuth
export const facebookOAuthSchema = yup.object({
  access_token: yup
    .string()
    .transform((v) => (typeof v === 'string' ? v.trim() : v))
    .required('กรุณาส่ง access_token ของ Facebook'),
})