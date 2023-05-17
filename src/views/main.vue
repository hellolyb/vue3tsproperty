<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <userMenu></userMenu>
      </el-aside>
      <el-container>
        <el-header>
          <indexHeader></indexHeader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import indexHeader from '@/components/userHeader/index.vue'
const store = useCounterStore()
store.getUserdata()
// 路由对象
const route = useRoute()
// 路由实例
const getLogin = async () => {}
getLogin()

const router = useRouter()
const data = reactive({})
// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  .el-header,
  .el-footer {
    background-image: linear-gradient(135deg, #3b2667 10%, #bc78ec 100%);
    color: #fff;
    height: 90px;
  }

  .el-aside {
    background-color: #34495e;
    color: #333;
    overflow-y: hidden;
  }

  .el-main {
    background-image: linear-gradient(135deg, #f97794 10%, #623aa2 100%);
    color: #333;
  }

  .el-container {
    height: 100%;
  }
}
</style>
