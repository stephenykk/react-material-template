import { request } from '@/utils'

export const getToken = async (email: string, password: string) => {
  const res = await request.post<{ token: string }>('/auth', {
    email,
    password,
  })

  return res.data
}
