import { mengxueguUrl } from '@/service/beseUel'
export const getUserTbaledata = (url: string, data: any) =>
  mengxueguUrl.ruquest({
    url: `${url}/list`,
    method: 'GET',
    params: data
  })
