<template>
  <div class="tables">
    <el-table :data="tableData" v-bind="tableConfig.tableParame" border style="width: 100%">
      <el-table-column v-for="item in tableConfig.propList" :key="item.prop" v-bind="item">
        <template #default="scope">
          <slot :name="item.slotName" :datas="scope.row">{{ scope.row[item.prop] }}</slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})

const props = defineProps({
  tableConfig: {
    type: Object as any,
    default: () => ({})
  },
  tableData: {
    type: Array,
    default: () => []
  }
})
</script>
<style scoped lang="scss"></style>
