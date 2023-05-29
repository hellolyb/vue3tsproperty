<template>
  <div class="tables">
    <el-table :data="tableData" v-bind="tableConfig.tableParame" border style="width: 100%">
      <el-table-column v-for="item in tableConfig.propList" :key="item.prop" v-bind="item">
        <template #default="scope">
          <slot :name="item.slotName" :datas="scope.row">{{ scope.row[item.prop] }}</slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="Pagination" v-if="!tableConfig?.showPagination">
      <el-pagination
        :page-sizes="[10, 20]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUserTbaledata } from '@/api/userTable/tables'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
// 数据总数量
const total = ref(0)
const props = defineProps({
  tableConfig: {
    type: Object as any,
    default: () => ({})
  },
  tableData: {
    type: Array,
    default: () => []
  },
  baseUrl: {
    type: String as any,
    default: () => ''
  },
  querys: {
    type: Object as any,
    default: () => ({})
  }
})
const tableData = ref([])
// const urls: any = {
//   sysUserList: `/user/list?loginName=&phone=&curentPage=1&pageSize=10&total=0`,
//   sysRoleList: '/role/list?pageSize=10&currentPage=1&roleName=&total=0',
//   sysMenuList: '/menu/list',
//   houseBuilding: '/HouseBuilding/list?name=&type=&pageSize=10&currentPage=1&total=0',
//   houseUnit: '/houseUnit/list?buildNme=&unitName=&currentPage=1&pageSize=10&total=0',
//   sysHouseList:
//     '/houseList/list?buildNme=&status=&unitName=&houseNum=&currentPage=1&pageSize=10&total=0',
//   parkList: '/parkList/list?currentPage=1&pageSize=10&parkName=&parkStatus=&parkType=&total=0',
//   liveUser: '/liveUser/list?loginName=&phone=&currentPage=1&pageSize=10&total=0',
//   feePower: '/feePower/list?userName=&houseNum=&currentPage=1&pageSize=10&total=0',
//   feeWater: '/feeWater/list?total=0&currentPage=1&pageSize=10&userName=&houseNum=',
//   feePark: '/feePark/list?currentPage=1&pageSize=10&userName=&parkName=&total=0',
//   userComplaintList:
//     '/userComplaint/list?currentPage=1&pageSize=10&title=&complaintContent=&total=0',
//   repairList: '/userRepair/list?total=0&currentPage=1&pageSize=10&userId=&repairContent=',
//   noticeList: '/sysNotice/list?currentPage=1&pageSize=10&title=&total=0'
// }
const getUserTbale = async (baseUrl: string, querys?: any) => {
  try {
    const userTableData: any = await getUserTbaledata(baseUrl, querys)
    if (baseUrl == '/menu') {
      tableData.value = userTableData.data
    } else {
      tableData.value = userTableData.data.records
      total.value = userTableData.data.total
    }
    console.log(userTableData, '王腾是骚货')
  } catch (e) {
    console.log(e)
  }
}
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
defineExpose({
  getUserTbale
})
</script>
<style scoped lang="scss">
.Pagination {
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
</style>
