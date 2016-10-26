import {
	GET_AUTHORIZE
} from '../types'

const state = {
	authorize: null
}

const mutations = {
	[GET_AUTHORIZE](state, action){
		state.authorize = action.authorize
	}
}

export default {
  state,
  mutations
}