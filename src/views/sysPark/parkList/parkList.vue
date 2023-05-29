<template>
  <div class="parkList">
    <pageFrom :formConfig="formConfig"></pageFrom>
    <tables :tableConfig="tableConfig" baseUrl="/parkList" ref="gettab">
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
      <template #operate>
        <div style="padding: 5px 0">
          <el-button type="primary" icon="EditPen" size="small">编辑</el-button>
          <el-button type="danger" icon="Delete" size="small">删除</el-button>
        </div>
      </template></tables
    >
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, onMounted } from 'vue'
import tables from '@/baseUi/table/tables.vue'
import pageFrom from '@/components/page-from/pageFrom.vue'
import { tableConfig, querys } from './config/tableConfig'
import { formConfig } from './config/fromConfig'
const gettab: any = ref()
onMounted(() => {
  gettab.value.getUserTbale('/parkList', querys.value)
})
</script>
<style scoped lang="scss"></style>
