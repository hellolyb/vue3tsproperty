<template>
  <div class="pageFrom"></div>
  <froms v-bind="formConfig" v-model="fromData">
    <template #button>
      <el-button icon="Search" @click="ok">查询</el-button>
      <el-button icon="Delete" style="color: red" @click="resetFrom">重置</el-button>
      <el-button type="primary" icon="Plus" v-if="!url" @click="newAdd">新增</el-button>
    </template>
  </froms>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, onMounted } from 'vue'
import froms from '@/baseUi/from/froms.vue'
const props = defineProps({
  formConfig: {
    type: Object,
    default: () => ({})
  },
  url: {
    type: String
  },
  zinstance: {
    type: Object as any
  },
  gettab: {
    type: Object as any
  },
  baseUrl: {
    type: String
  },
  querys: {
    type: Object as any
  }
})
// 过滤出当前表单所需属性
const formItems = props.formConfig?.formItemS?.filter((item: any) => item.field)

const fromOrigin: any = {}
for (const item of formItems) {
  fromOrigin[item.field] = ''
}
const fromData = ref(fromOrigin)
const querys = ref({ ...props.querys })
const ok = () => {
  for (let key in fromData.value) {
    querys.value[key] = fromData.value[key]
  }
  props.gettab.getUserTbale(props.baseUrl, querys.value)
}
// 重置表单
const resetFrom = () => {
  props.gettab.getUserTbale(props.baseUrl, props.querys)
  for (let key in fromOrigin) {
    fromData.value[key] = fromOrigin[key]
  }
}
const emits = defineEmits(['handleOpenDialog'])
const newAdd = () => {
  resetFrom()
  props.zinstance.dialogVisible = true
  emits('handleOpenDialog', 'add')
}
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss"></style>
