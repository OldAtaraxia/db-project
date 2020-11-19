import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)

export default {
    //存储数据
    state: {
      isCollapse: false
    },
    //调用方法
    mutations: {
      collapseMenu(state) {
        state.isCollapse = !state.isCollapse
      }
    },
    actions: {}
  }