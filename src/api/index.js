import {Login, Current, Marketer, MarketerLocus, Faults, BikeList} from './resources'
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
  },

  getCurrent(context) {
    return Current.get().then(response => {
      if(!response.ok){
        return context.$message({ message: "接口访问失败", type: 'error' });
      }
      const data = response.data;
      if(data.success){
        context.current = data.data;
      } else {
        context.$message({ message: data.data.error, type: 'error' });
      }
    }, response => {

    })
  },

  getMarketerList(context, cityId){
    return Marketer.get({cityId}).then(response => {
      if(!response.ok){
        return context.$message({ message: "接口访问失败", type: 'error' });
      }
      const data = response.data;
      if(data.success){
        context.marketers = data.data;
        return context.marketers;
      } else {
        context.$message({ message: data.data.error, type: 'error' });
      }
    }, response => {

    })
  },

  getMarketerLocus(context, query){
    return MarketerLocus.get(query).then(response => {
      if(!response.ok){
        return context.$message({ message: "接口访问失败", type: 'error' });
      }
      const data = response.data;
      if(data.success){
        context.locus = data.data;
        return context.locus;
      } else {
        context.$message({ message: data.data.error, type: 'error' });
      }
    })
  },

  getFaults(context, query) {
    return Faults.get(query).then(response => {
      if(!response.ok){
        return context.$message({ message: "接口访问失败", type: 'error' });
      }
      const data = response.data;
      if(data.success){
        context.faults = data.data;
        return context.faults;
      } else {
        context.$message({ message: data.data.error, type: 'error' });
      }
    })
  },

  putFault(context, query) {
    return Faults.update(query).then(response => {
      if(!response.ok){
        return context.$message({ message: "接口访问失败", type: 'error' });
      }
      const data = response.data;
      if(data.success){
        // context.faults = data.data;
        // return context.faults;
        context.$message({ message: data.data.message, type: 'success' });
      } else {
        context.$message({ message: data.data.error, type: 'error' });
      }
    })
  },

  getBikeList(context, query) {
    return BikeList.get(query).then(response => {
      if(!response.ok){
        return context.$message({ message: "接口访问失败", type: 'error' });
      }
      const data = response.data;
      if(data.success){
        context.bikes = data.data;
        return context.bikes;
      } else {
        context.$message({ message: data.data.error, type: 'error' });
      }
    })
  },
}