<template>
  <div class="feeWater">
    <pageFrom :formConfig="formConfig"></pageFrom>
    <tables :tableConfig="tableConfig" baseUrl="/feeWater" :querys="querys">
      <template #payWaterStatus="scope">
        <el-tag class="ml-2" :type="scope.datas.payWaterStatus < 1 ? 'danger' : 'success'">{{
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
    </tables>
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
