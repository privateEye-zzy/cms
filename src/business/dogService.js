import Http from 'utils/http.js'
class DogService {
	constructor(){}
	static async transformToVue(urlType, method, data){
		let ret = await Http.ajax(urlType, method, data)
		return ret
	}
	static async transformToService(urlType, method, data) {
		let ret = await Http.ajax(urlType, method, data)
		return ret
	}
}
export default DogService