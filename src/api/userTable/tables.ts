import { mengxueguUrl } from '@/service/beseUel'
export const getUserTbaledata = (url: string) =>
  mengxueguUrl.ruquest({
    url: url
  })
