import Vue from 'vue'
import App from '../app.vue'
import Bars from '../bars.vue'

Vue.config.productionTip = false;

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  new Vue({
    render: h => h(Bars),
    el: '#bars'
  })


  console.log(app)
})
