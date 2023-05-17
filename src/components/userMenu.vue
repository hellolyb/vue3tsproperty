<template>
  <div class="menu">
    <div class="logo">
      <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" alt="" />
      <h3>物业管理系统</h3>
    </div>
    <el-col>
      <el-menu
        active-text-color="#39f"
        background-color="#34495E"
        class="el-menu-vertical-demo"
        :default-active="route.path"
        text-color="#fff"
        unique-opened
        router
      >
        <template v-for="item in usetMenu" :key="item.path">
          <el-sub-menu :index="item.path">
            <template #title>
              <el-icon><Position /></el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
            <template v-for="ele in item.children" :key="ele.path">
              <el-menu-item :index="ele.path">
                <el-icon><Link /></el-icon>
                <span>{{ ele.meta.title }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-col>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const usetMenu = computed(() => store.menuLists)

// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.menu {
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    color: #fff;
    background-color: #6666;
    img {
      width: 30px;
      height: 30px;
      margin-right: 6px;
    }
  }
  .el-menu-vertical-demo {
    border: 0;
  }
}
</style>
