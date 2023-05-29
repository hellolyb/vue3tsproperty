import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/main.css'
// 初始化样式

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 按钮权限
const bbs = ['edit', 'add']
app.directive('prkapg', (el: any, bindings: any) => {
  const value = bbs.includes(bindings.value)
  console.log(value)
  if (!value) {
    el.style.display = 'none'
    setTimeout(() => {
      el.parentNode.removeChild
    }, 30)
  }
})
app.use(createPinia())
app.use(router)

app.mount('#app')
