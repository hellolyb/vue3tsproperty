import { mengxueguUrl } from '@/service/beseUel'
export const getUserMenu = () =>
  mengxueguUrl.get({
    url: '/user/getMenuList'
  })
