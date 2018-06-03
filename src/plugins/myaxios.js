import axios from 'axios'
var MyAxios = {}
MyAxios.install = function(Vue){
    // set the baseURL of axios in global (create)
    const instance = axios.create({
        baseURL:'http://localhost:3000'
    })
    Vue.prototype.$axios = instance
}

export default MyAxios;