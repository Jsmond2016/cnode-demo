/*
 * @Description:
 * @Date: 2020-05-06 22:22:36
 * @Author: Jsmond2016
 * @Copyright: Copyright (c) 2020
 */

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
// import getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions
  // getters
})
