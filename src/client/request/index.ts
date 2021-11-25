import axios from "axios";

//  底层
const request = async (url, method, data = null) => {
		return new Promise(((resolve, reject) => {
				axios.get(url, {method, data})
						.then(v => {
								if (v.status === 200) {
										resolve(v.data);
								}
								reject(v.data);
						})
		}))
}
//  get 请求
const requestGet = async (url, params = null) => {
		if (params) {
				url += `?${new URLSearchParams(params).toString()}`;
		}
		return request(url, 'get');
}
const requestGetData = () => {
		return requestGet('/api/getData', null)
}

export {
		requestGetData,
}
