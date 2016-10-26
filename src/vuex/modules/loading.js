import {
  UPDATE_LOADING,
  UPDATE_DIRECTION
} from '../types'

const state = {
  isLoading: false,
  direction: 'forward'
}

const mutations = {
  [UPDATE_LOADING](state, status) {
    state.isLoading = status
  },
  [UPDATE_DIRECTION](state, direction) {
    state.direction = direction
  }
}

export default {
  state,
  mutations
}