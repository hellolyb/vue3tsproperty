<template>
  <div class="sysHouseList">
    <pageFrom :formConfig="formConfig"></pageFrom>
    <tables :tableConfig="tableConfig" baseUrl="/houseList" :querys="querys">
      <template #Usagestatus="scope">
        <el-tag class="ml-2" :type="scope.datas.status < 1 ? 'danger' : 'success'">{{
          scope.datas.status < 1 ? '未使用' : '已使用'
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
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import tables from '@/baseUi/table/tables.vue'
import pageFrom from '@/components/page-from/pageFrom.vue'
import { tableConfig, querys } from './config/tableConfig'
import { formConfig } from './config/fromConfig'

// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
</script>
<style scoped lang="scss"></style>
