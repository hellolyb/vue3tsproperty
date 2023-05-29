<template>
  <div class="froms">
    <el-form v-bind="fromHeader" :model="fromData">
      <template v-for="(item, index) in formItemS" :key="index">
        <el-form-item :label="item.label">
          <el-input
            v-if="item.type == 'input' || item.type == 'password'"
            v-bind="item"
            v-model="fromData[item.field]"
          />
        </el-form-item>
        <el-form-item v-if="item.type === 'radio'">
          <el-radio-group v-model="fromData[item.field]">
            <el-radio v-for="(ele, index) in item.options" :key="index" :label="ele.label">{{
              ele.text
            }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="item.type === 'select'">
          <el-select v-model="fromData[item.field]" :placeholder="item.placeholder" size="large">
            <el-option
              v-for="ele in item.options"
              :key="ele.value"
              :label="ele.label"
              :value="ele.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item v-if="item.slotName === 'button'">
          <slot :name="item.slotName"></slot>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const form = reactive({
  name: ''
})
const props = defineProps({
  formItemS: {
    type: Array as any,
    default: () => []
  },
  fromHeader: {
    type: Object,
    default: () => ({})
  },
  modelValue: {
    type: Object,
    default: () => ({})
  }
})
const fromData = reactive({ ...props.modelValue })
const emits = defineEmits(['update:modelValue'])
watchEffect(() => {
  emits('update:modelValue', fromData)
})
</script>
<style scoped lang="scss"></style>
<style>
.el-form-item__label {
  font-weight: 800;
  color: #606266;
  margin-right: 0 !important;
}
</style>
