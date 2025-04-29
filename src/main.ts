import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementIcons from '@element-plus/icons-vue'
import VueEcharts from 'vue-echarts'
import router from './router'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.css'
import App from './App.vue'
const app = createApp(App)

// 注册Element Plus图标
Object.keys(ElementIcons).forEach(key => {
  app.component(key, ElementIcons[key as keyof typeof ElementIcons])
})

// 全局注册ECharts组件
app.component('VChart', VueEcharts)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
