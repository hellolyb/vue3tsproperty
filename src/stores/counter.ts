import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getLoginApi } from '@/api/login/login'
import { getUserMenu } from '@/api/menu/gitmenu'
import loca from '@/utils/storage/loca'
export const useCounterStore = defineStore('counter', () => {
  let menuLists = JSON.parse(loca.getItem('userMenu')) ?? []
  const getUserdata = async () => {
    try {
      // 登录
      const userInfo: any = await getLoginApi()
      loca.setItem('token', userInfo.data.token)
      // 获取用户侧边栏信息
      const menuList: any = await getUserMenu()
      menuLists = menuList.data
      console.log(menuList)
      loca.setItem('userMenu', JSON.stringify(menuList.data))
    } catch (err) {
      console.log(err)
    }
  }

  return { getUserdata, menuLists }
})
