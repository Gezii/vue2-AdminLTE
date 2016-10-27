import {Login} from './resources'
import {saveStorage} from '../services/auth'

// get: {method: 'GET'},
// save: {method: 'POST'},
// query: {method: 'GET'},
// update: {method: 'PUT'},
// remove: {method: 'DELETE'},
// delete: {method: 'DELETE'}

export default {
  login(context, user){
    return Login.save(user).then(response => {
      if(!response.ok){
        return context.$message({ message: "接口访问失败", type: 'error' });
      }
      const data = response.data;
      if(data.success){
        let token = data.data;
        saveStorage("token", token);
        context.$router.push({name: "staffs"});
      } else {
        context.$message({ message: data.data.error, type: 'error' });
      }
    }, response => {

    })
  }
}