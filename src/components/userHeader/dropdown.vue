<template>
  <div class="dropdown">
    <el-dropdown @command="handleCommand">
      <el-avatar
        shape="square"
        :size="40"
        src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
      />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="d" divided>重置密码</el-dropdown-item>
          <el-dropdown-item command="e" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
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
const handleCommand = (command: string | number | object) => {
  console.log(command)
}
</script>
<style scoped lang="scss">
.dropdown {
  :focus {
    outline: 0;
  }
}
</style>
