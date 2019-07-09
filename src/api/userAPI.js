import {post} from './http'

export const loginAPI = data => post('/api/user/login/', data)

export const registerAPI = data => post('/api/user/register/', data)

export const resetPasswordAPI = data => post('/api/user/reset_password/', data)

export const updatePasswordAPI = data => post('/api/user/update_password/', data)

export const sendSMSCodeAPI = data => post('/api/user/send_sms_code/', data)
