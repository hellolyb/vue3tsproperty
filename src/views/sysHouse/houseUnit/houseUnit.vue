<template>
  <div class="houseUnit">
    <pageTable :tableConfig="tableConfig" baseUrl="houseUnit"></pageTable>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tableConfig } from './config/tableConfig'
import pageTable from '@/components/page-table/pageTable.vue'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
</script>
<style scoped lang="scss"></style>
