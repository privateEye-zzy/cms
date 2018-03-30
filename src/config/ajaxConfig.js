import axios from 'axios'
import load from 'utils/loading'
import user from 'utils/user.js'
axios.defaults.timeout = 0
axios.defaults.baseURL = 'http://192.168.1.110:3338'
//封装动画耗时任务
function loadTask(){
	return new Promise(resolve => {setTimeout(()=>{load.remove();resolve()},300)})
}
// 添加请求拦截器 
axios.interceptors.request.use(config => {
	load.show()
	return config
} , error => Promise.reject(error))
// 添加响应拦截器
axios.interceptors.response.use(async function (response){
	await loadTask()
	let data = response.data
	return data
} , error => Promise.reject(error))
export default axios