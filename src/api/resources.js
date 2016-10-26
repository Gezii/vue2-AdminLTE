import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'
import {getStorage} from '../services/auth'

/**
 * vue http config
 */
Vue.use(VueResource)
Vue.http.options.root = API_ROOT
// Vue.http.options.crossOrigin = true
// Vue.http.options.credentials = true
// Vue.http.options.emulateJSON = true;
// Vue.http.options.emulateHTTP = true;
// Vue.http.headers.common['Authorization'] = 'Bearer 65fb73a5388d95f9a786f361ff205dd6';

Vue.http.interceptors.push((request, next) => {
  // 这里对请求体进行处理
  // request.headers = request.headers || {}
  const token = getStorage('token')
  Vue.http.headers.common['Authorization'] = token ? 'Bearer ' + token.accessToken : ''
  next((response) => {
    // 这里可以对响应的结果进行处理
    let data = response.data || {}
    if (data.hasOwnProperty('success')) {
      // response.data = data.data;
      if (response.data.code === 401) {
        // alert(response.data.error)
      }
    }
  })
})

export const Login = Vue.resource(API_ROOT + 'token')
export const Current = Vue.resource(API_ROOT + 'current')
export const Marketer = Vue.resource(API_ROOT + 'marketer{?cityId}')
export const MarketerLocus = Vue.resource(API_ROOT + 'marketer_locus{/id}')
export const Faults = Vue.resource(API_ROOT + 'faults{?begin?status}')
export const BikeList = Vue.resource(API_ROOT + 'bike/list{/status}')