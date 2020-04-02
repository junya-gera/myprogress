import Vue from 'vue'
import App from '../components/app.vue'
import store from '../store'

Vue.config.productionTip = false;

// document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    store,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)