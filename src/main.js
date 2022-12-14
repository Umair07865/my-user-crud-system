import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import VueRouter from "vue-router"
import DashboardHome from "./components/DashboardHome.vue"
import LoginInputs from './components/LoginInputs.vue';


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// import store from './store/modules/todos'


import {store} from "./store/store"
Vue.use(VueRouter);

const router=new VueRouter({
routes:[
  {
    path:'/',
    component: LoginInputs
  },
  {
    path:"/Home",
    component: DashboardHome
  },
  

],
mode:'history'


})
Vue.config.productionTip = false;

new Vue({
    store,
  router,
 
  render: h => h(App),
}).$mount('#app')
