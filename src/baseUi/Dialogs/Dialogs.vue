<template>
  <div class="dialogs">
    <el-dialog
      v-model="dialogVisible"
      destroy-on-close
      :title="DialogTitle"
      width="610"
      :before-close="handleClose"
    >
      <div class="forms">
        <slot></slot>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="Cancel" type="danger">取消</el-button>
          <el-button type="primary" @click="ookk">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const props = defineProps({
  DialogTitle: {
    type: String,
    default: ''
  }
})
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
const dialogVisible = ref(false)
const handleClose = () => {
  dialogVisible.value = false
}
// 关闭弹框
const Cancel = () => {
  dialogVisible.value = false
}
defineExpose({
  dialogVisible
})
const emits = defineEmits(['ookk'])
const ookk = () => {
  emits('ookk')
}
</script>
<style scoped lang="scss">
.forms {
  height: 200px;
  overflow-y: hidden;
}
</style>
<style lang="scss">
.el-dialog__header {
  background-color: #39f;
  margin-right: 0;
  .el-dialog__title {
    color: #fff;
    font-weight: bold;
  }
  .el-dialog__headerbtn {
    color: #fff !important;
  }
}
.el-dialog__footer {
  border-top: 1px solid #ccc;
}
</style>
