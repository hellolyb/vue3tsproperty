<template>
  <div class="pageTable">
    <tables :tableConfig="tableConfig" :baseUrl="baseUrl" :tableData="tableData">
      <template #noticeoperate>
        <el-button type="primary" icon="EditPen" size="small">处理</el-button>
        <el-button type="danger" icon="Delete" size="small">删除</el-button>
      </template>
      <template #repairoperate>
        <el-button type="primary" icon="EditPen" size="small">处理</el-button>
      </template>
      <template #statusAll="scope">
        <el-tag class="ml-2" :type="scope.datas.payParkStatus < 1 ? 'danger' : 'success'">{{
          scope.datas.status > 1 ? '未处理' : '已处理'
        }}</el-tag>
      </template>
      <template #disposestatus="scope">
        <el-tag class="ml-2" :type="scope.datas.payParkStatus < 1 ? 'danger' : 'success'">{{
          scope.datas.disposestatus > 1 ? '未处理' : '已处理'
        }}</el-tag>
      </template>
      <template #dispose>
        <el-button type="success" icon="EditPen" size="small"> 删除 </el-button>
      </template>
      <template #Parkoperate="scope">
        <el-button type="primary" icon="EditPen" size="small">编辑</el-button>
        <el-button type="danger" icon="Delete" size="small">删除</el-button>
        <el-button type="warning" size="small" icon="Money" v-if="scope.datas.payParkStatus != 1"
          >缴费</el-button
        >
      </template>
      <template #payParkStatus="scope">
        <el-tag class="ml-2" :type="scope.datas.payParkStatus < 1 ? 'danger' : 'success'">{{
          scope.datas.payParkStatus > 1 ? '未缴费' : '已缴费'
        }}</el-tag>
      </template>
      <template #payWaterStatus="scope">
        <el-tag class="ml-2" :type="scope.datas.payPowerStatus < 1 ? 'danger' : 'success'">{{
          scope.datas.payWaterStatus > 1 ? '未缴费' : '已缴费'
        }}</el-tag>
      </template>
      <template #Wateroperate="scope">
        <el-button type="primary" icon="EditPen" size="small">编辑</el-button>
        <el-button type="danger" icon="Delete" size="small">删除</el-button>
        <el-button type="warning" size="small" icon="Money" v-if="scope.datas.payWaterStatus != 1"
          >缴费</el-button
        >
      </template>
      <template #payPowerStatus="scope">
        <el-tag class="ml-2" :type="scope.datas.payPowerStatus < 1 ? 'danger' : 'success'">{{
          scope.datas.payPowerStatus > 1 ? '未缴费' : '已缴费'
        }}</el-tag>
      </template>
      <template #feeoperate="scope">
        <el-button type="primary" icon="EditPen" size="small">编辑</el-button>
        <el-button type="danger" icon="Delete" size="small">删除</el-button>
        <el-button type="warning" size="small" icon="Money" v-if="scope.datas.payPowerStatus != 1"
          >缴费</el-button
        >
      </template>
      <template #operateAll>
        <el-button type="success" size="small">编辑</el-button>
        <el-button type="primary" size="small">分配房屋</el-button>
        <el-button type="primary" size="small">分配车位</el-button>
        <el-button type="danger" size="small">退房</el-button>
        <el-button type="warning" size="small">退车位</el-button>
        <el-button type="danger" size="small">删除</el-button>
      </template>
      <template #todisable="scope">
        <el-tag class="ml-2" :type="scope.datas.status < 1 ? 'danger' : 'success'">{{
          scope.datas.status < 1 ? '启用' : '禁用'
        }}</el-tag>
      </template>
      <template #parkType="scope">
        <el-tag class="ml-2" :type="scope.datas.parkType < 1 ? 'danger' : 'success'">{{
          scope.datas.parkType < 1 ? '地上' : '地下'
        }}</el-tag>
      </template>
      <template #parkStatus="scope">
        <el-tag class="ml-2" :type="scope.datas.parkStatus < 1 ? 'danger' : 'success'">{{
          scope.datas.parkStatus < 1 ? '已使用' : '未使用'
        }}</el-tag>
      </template>
      <template #Usagestatus="scope">
        <el-tag class="ml-2" :type="scope.datas.status < 1 ? 'danger' : 'success'">{{
          scope.datas.status < 1 ? '未使用' : '已使用'
        }}</el-tag>
      </template>
      <template #orderNum="scope">
        <el-tag v-if="scope.datas.orderNum == 1 || scope.datas.orderNum == 3" type="success"
          >普通房</el-tag
        >
        <el-tag type="danger" v-else>电梯房</el-tag>
      </template>
      <template #sex="scope">
        <el-tag class="ml-2" :type="scope.datas.sex < 1 ? 'success' : ''">{{
          scope.datas.sex < 1 ? '女' : '男'
        }}</el-tag>
      </template>
      <template #isUsed="scope">
        <el-switch
          v-model="scope.datas.isUsed"
          size="small"
          active-text="是"
          inactive-text="否"
          active-value="1"
          inactive-value="0"
        />
      </template>
      <template #status="scope">
        <el-switch
          v-show="!(scope.datas.loginName == 'admin')"
          v-model="scope.datas.status"
          size="small"
          active-text="是"
          inactive-text="否"
          active-value="1"
          inactive-value="0"
        />
      </template>
      <template #type="scope">
        <el-tag v-if="scope.datas.type == 0">目录</el-tag>
        <el-tag v-if="scope.datas.type == 1" type="success">菜单</el-tag>
        <el-tag v-if="scope.datas.type == 2" type="danger">按钮</el-tag>
      </template>
      <template #operate>
        <div style="padding: 5px 0">
          <el-button type="primary" icon="EditPen" size="small">编辑</el-button>
          <el-button type="success" icon="EditPen" size="small" v-if="baseUrl === 'sysUserList'">
            分配角色
          </el-button>
          <el-button type="success" icon="EditPen" size="small" v-if="baseUrl === 'sysRoleList'">
            分配权限
          </el-button>
          <el-button type="danger" icon="Delete" size="small">删除</el-button>
        </div>
      </template>
    </tables>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import tables from '@/baseUi/table/tables.vue'
import { getUserTbaledata } from '@/api/userTable/tables'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
const props = defineProps({
  tableConfig: {
    type: Object,
    default: () => ({})
  },
  baseUrl: {
    type: String as any,
    default: () => ''
  }
})
const tableData = ref([])
const urls: any = {
  sysRoleList: '/role/list?pageSize=10&currentPage=1&roleName=&total=0',
  sysUserList: '/user/list?loginName=&phone=&curentPage=1&pageSize=10&total=0',
  sysMenuList: '/menu/list',
  houseBuilding: '/HouseBuilding/list?name=&type=&pageSize=10&currentPage=1&total=0',
  houseUnit: '/houseUnit/list?buildNme=&unitName=&currentPage=1&pageSize=10&total=0',
  sysHouseList:
    '/houseList/list?buildNme=&status=&unitName=&houseNum=&currentPage=1&pageSize=10&total=0',
  parkList: '/parkList/list?currentPage=1&pageSize=10&parkName=&parkStatus=&parkType=&total=0',
  liveUser: '/liveUser/list?loginName=&phone=&currentPage=1&pageSize=10&total=0',
  feePower: '/feePower/list?userName=&houseNum=&currentPage=1&pageSize=10&total=0',
  feeWater: '/feeWater/list?total=0&currentPage=1&pageSize=10&userName=&houseNum=',
  feePark: '/feePark/list?currentPage=1&pageSize=10&userName=&parkName=&total=0',
  userComplaintList:
    '/userComplaint/list?currentPage=1&pageSize=10&title=&complaintContent=&total=0',
  repairList: '/userRepair/list?total=0&currentPage=1&pageSize=10&userId=&repairContent=',
  noticeList: '/sysNotice/list?currentPage=1&pageSize=10&title=&total=0'
}
const getUserTbale = async () => {
  try {
    const userTableData: any = await getUserTbaledata(urls[props.baseUrl])
    if (props.baseUrl == 'sysMenuList') {
      tableData.value = userTableData.data
    } else {
      tableData.value = userTableData.data.records
    }
    console.log(userTableData, '12345678')
  } catch (e) {
    console.log(e)
  }
}
getUserTbale()
</script>
<style scoped lang="scss"></style>
