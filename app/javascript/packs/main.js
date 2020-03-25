import Vue from 'vue'
import App from '../components/app.vue'
import Bars from '../components/bars.vue'
import SideMenu from '../components/sideMenu.vue'
import store from '../store'

Vue.config.productionTip = false;

// document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    store,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  const app2 = new Vue({
    store,
    render: h => h(Bars),
    el: '#bars'
  })

  const app3 = new Vue({
    store,
    render: h => h(SideMenu),
    el: '#side-menu'
  })

  export const BarsMenu = new Vue()