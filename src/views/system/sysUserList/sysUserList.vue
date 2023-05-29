<template>
  <div class="sysUserList">
    <pageFrom
      :formConfig="formConfig"
      :zinstance="dinstance"
      @handleOpenDialog="handleOpenDialog"
      :gettab="gettab"
      baseUrl="/user"
      :querys="querys"
    ></pageFrom>
    <!-- table表格 -->
    <tables :tableConfig="tableConfig" :querys="querys" baseUrl="" ref="gettab">
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
      <template #sex="scope">
        <el-tag class="ml-2" :type="scope.datas.sex < 1 ? 'success' : ''">{{
          scope.datas.sex < 1 ? '女' : '男'
        }}</el-tag>
      </template>
      <template #operate="scope">
        <div style="padding: 5px 0">
          <el-button
            type="primary"
            icon="EditPen"
            size="small"
            v-prkapg="'edit'"
            @click="handleOpenDialog('edit', scope.datas)"
            >编辑</el-button
          >
          <el-button
            type="success"
            icon="EditPen"
            size="small"
            @click="handleOpenDialog('role', scope.datas)"
          >
            分配角色
          </el-button>
          <el-button type="danger" icon="Delete" size="small">删除</el-button>
        </div>
      </template></tables
    >
    <Dialogs ref="dinstance" @ookk="ookk" :DialogTitle="DialogTitle">
      <froms v-bind="dialogConig" v-model="fromData"></froms>
    </Dialogs>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, onMounted } from 'vue'
import { tableConfig, querys } from './config/tabConfig'
import tables from '@/baseUi/table/tables.vue'
import pageFrom from '@/components/page-from/pageFrom.vue'
import Dialogs from '@/baseUi/Dialogs/Dialogs.vue'
import froms from '@/baseUi/from/froms.vue'
import { formConfig } from './config/fromConfig'
import { dialogConig } from './config/dialogConig'
const dinstance: any = ref()
const DialogTitle = ref('')
const gettab: any = ref()

onMounted(() => {
  gettab.value.getUserTbale('/user', querys.value)
})
// gettab.value.getUserTbale('/user', querys.value)
const editObj = ref({})
// 过滤出当前表单所需属性
const formItems = dialogConig?.formItemS?.filter((item: any) => item.field)
const fromOrigin: any = {}
for (const item of formItems) {
  fromOrigin[item.field] = ''
}
const fromData = ref(fromOrigin)

const handleOpenDialog = (val: string, row?: any) => {
  const title: any = {
    add: '添加员工',
    edit: '编辑员工',
    role: `为【${row?.loginName}】分配角色`
  }
  if (val === 'edit') checkShowData(row)
  DialogTitle.value = title[val]
  dinstance.value.dialogVisible = true
}
// 编辑数据回显
const checkShowData = (row: any) => {
  for (const item of dialogConig.formItemS) {
    fromData.value[item.field] = row[item.field]
  }
}
const ookk = () => {
  console.log(1111)
}
</script>
<style scoped lang="scss"></style>
