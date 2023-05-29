<template>
  <div class="liveUser">
    <pageFrom :formConfig="formConfig"></pageFrom>

    <tables :tableConfig="tableConfig" baseUrl="/liveUser" :querys="querys">
      <template #sex="scope">
        <el-tag :type="scope.datas.sex < 1 ? 'success' : 'danger'">{{
          scope.datas.sex < 1 ? '男' : '女'
        }}</el-tag>
      </template>
      <template #todisable="scope">
        <el-tag :type="scope.datas.status < 1 ? 'success' : 'danger'">{{
          scope.datas.status < 1 ? '启用' : '禁用'
        }}</el-tag>
      </template>
      <template #operateAll>
        <el-button type="success" size="small">编辑</el-button>
        <el-button type="primary" size="small">分配房屋</el-button>
        <el-button type="primary" size="small">分配车位</el-button>
        <el-button type="danger" size="small">退房</el-button>
        <el-button type="warning" size="small">退车位</el-button>
        <el-button type="danger" size="small">删除</el-button>
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
// 方法部分
</script>
<style scoped lang="scss"></style>
