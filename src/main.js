import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/index'
import VueResource from 'vue-resource'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install Vue-Router
Vue.use(VueRouter)
// Install Vue-Resource
Vue.use(VueResource)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const router = new VueRouter({
  //mode: history,
  routes
})





Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
