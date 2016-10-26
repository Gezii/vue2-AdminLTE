import api from '../api'
import * as types from './types'

export const showMsg = ({dispatch}, content, type='error') => {
  dispatch(types.SHOW_MSG, {content:content, type:type})
}

export const hideMsg = ({dispatch}) => {
  dispatch(types.HIDE_MSG)
}

// for test
export const welcome = (store) => {
  showMsg(store, 'welcome back!', 'success')
}