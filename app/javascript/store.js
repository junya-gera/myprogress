import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);    // 全体で()のプラグインを使用するという宣言

export default new Vuex.Store({
  state: {    // ここに全体で使えるグローバル変数のようなものを宣言する
    open: true,
    count: 2
  }
})
