import { mengxueguUrl } from '@/service/beseUel'
export const getLoginApi = () =>
  mengxueguUrl.post({
    url: '/user/login',
    data: {
      password: '123456',
      userType: 1,
      username: 'admin'
    }
  })
