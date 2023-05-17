import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/main.vue'),
      children: [
        {
          path: '/sysUserList',
          name: 'sysUserList',
          component: () => import('../views/system/sysUserList/sysUserList.vue')
        },
        {
          path: '/sysRoleList',
          name: 'sysRoleList',
          component: () => import('../views/system/sysRoleList/sysRoleList.vue')
        },
        {
          path: '/sysMenuList',
          name: 'sysMenuList',
          component: () => import('../views/system/sysMenuList/sysMenuList.vue')
        },
        {
          path: '/houseBuilding',
          name: 'houseBuilding',
          component: () => import('../views/sysHouse/houseBuilding/houseBuilding.vue')
        },
        {
          path: '/houseUnit',
          name: 'houseUnit',
          component: () => import('../views/sysHouse/houseUnit/houseUnit.vue')
        },
        {
          path: '/sysHouseList',
          name: 'sysHouseList',
          component: () => import('../views/sysHouse/sysHouseList/sysHouseList.vue')
        },
        {
          path: '/parkList',
          name: 'parkList',
          component: () => import('../views/sysPark/parkList/parkList.vue')
        },
        {
          path: '/liveUser',
          name: 'liveUser',
          component: () => import('../views/live/liveUser/liveUser.vue')
        },
        {
          path: '/feePower',
          name: 'feePower',
          component: () => import('../views/fee/feePower/feePower.vue')
        },
        {
          path: '/feeWater',
          name: 'feeWater',
          component: () => import('../views/fee/feeWater/feeWater.vue')
        },
        {
          path: '/feePark',
          name: 'feePark',
          component: () => import('../views/fee/feePark/feePark.vue')
        },
        {
          path: '/userComplaintList',
          name: 'userComplaintList',
          component: () => import('../views/userComplaint/userComplaintList/userComplaintList.vue')
        },
        {
          path: '/repairList',
          name: 'repairList',
          component: () => import('../views/repairModel/repairList/repairList.vue')
        },
        {
          path: '/noticeList',
          name: 'noticeList',
          component: () => import('../views/notice/noticeList/noticeList.vue')
        }
      ]
    }
  ]
})

export default router
