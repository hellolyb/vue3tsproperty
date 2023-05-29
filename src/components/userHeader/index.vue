<template>
  <div class="index">
    <div class="logo">
      <icontog></icontog>
      <div style="width: 500px; display: flex; justify-content: space-between">
        <Love></Love>
        <Love></Love>
        <Love></Love>
        <Love></Love>
        <Love></Love>
        <Love></Love>
      </div>
      <dropdown></dropdown>
    </div>
    <div class="routerTitle"></div>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import icontog from './icontog.vue'
import dropdown from './dropdown.vue'
import Love from './Love.vue'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
</script>
<style scoped lang="scss">
.index {
  width: 100%;
  height: 100%;
  .logo {
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
  }
  .routerTitle {
    width: 100%;
    background-color: #fff;
    height: 100%;
    box-shadow: 0 1px 5px 0 rgba(41, 128, 185, 0.9), 0 0 3px 0 rgba(41, 128, 185, 0.9);
  }
}
</style>
