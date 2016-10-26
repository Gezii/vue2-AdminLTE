import Vue from 'vue'
import Vuex from 'vuex'

import loading from './modules/loading'
import showmsg from './modules/showmsg'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    loading,
    showmsg
  },
  strict: debug,
})
