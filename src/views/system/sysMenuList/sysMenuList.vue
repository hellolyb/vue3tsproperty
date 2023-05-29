<template>
  <div class="sysMenuList">
    <tables :tableConfig="tableConfig" ref="gettab">
      <template #type="scope">
        <el-tag v-if="scope.datas.type == 0">目录</el-tag>
        <el-tag v-if="scope.datas.type == 1" type="success">菜单</el-tag>
        <el-tag v-if="scope.datas.type == 2" type="danger">按钮</el-tag>
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
import { tableConfig } from './config/tabConfig'
const gettab: any = ref()
onMounted(() => {
  gettab.value.getUserTbale('/menu')
})
</script>
<style scoped lang="scss"></style>
