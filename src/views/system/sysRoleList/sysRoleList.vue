<template>
  <div class="sysRoleList">
    <pageFrom :formConfig="formConfig"></pageFrom>
    <tables :tableConfig="tableConfig" ref="gettab">
      <template #operate>
        <div style="padding: 5px 0">
          <el-button type="primary" icon="EditPen" size="small">编辑</el-button>
          <el-button type="success" icon="EditPen" size="small"> 分配权限 </el-button>
          <el-button type="danger" icon="Delete" size="small">删除</el-button>
        </div>
      </template>
    </tables>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, onMounted } from 'vue'
import tables from '@/baseUi/table/tables.vue'
import pageFrom from '@/components/page-from/pageFrom.vue'
import { tableConfig, querys } from './config/tabConfig'
import { formConfig } from './config/fromConfig'
const gettab: any = ref()
onMounted(() => {
  gettab.value.getUserTbale('/role', querys.value)
})
</script>
<style scoped lang="scss"></style>
