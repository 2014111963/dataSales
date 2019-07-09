import {post} from './http'

export const getcompanyDataAPI = params => post('/api/company/', params)
