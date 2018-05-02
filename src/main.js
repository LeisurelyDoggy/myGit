// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// element ui
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
// page
// 个人信息
import info from '@/components/info/info'
// 预约
import appointment from '@/components/appointment/appointment'
import type from '@/components/type/type'
import date from '@/components/date/date'
import department from '@/components/department/department'
import doctor from '@/components/doctor/doctor'
import order from '@/components/order/order'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

const routes = [
  { path: '/', component: info },
  { path: '/appointment', name: 'appointment', component: appointment },
  { path: '/type', name: 'type', component: type },
  { path: '/info', name: 'info', component: info },
  { path: '/date', name: 'date', component: date },
  { path: '/department', name: 'department', component: department },
  { path: '/doctor', name: 'doctor', component: doctor },
  { path: '/order', name: 'order', component: order }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
