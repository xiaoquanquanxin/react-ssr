import axios from "axios";

//  底层
const request = async (url, method, data = null) => {
		return new Promise(((resolve, reject) => {
				axios.get(url, {method, data})
						.then(v => {
								if (v.status === 200) {
										console.log('接口底层', v.data);
										resolve(v.data);
								}
								reject(v.data);
						});
		}));
};
//  get 请求
const requestGet = async (url, params = null) => {
		if (params) {
				url += `?${new URLSearchParams(params).toString()}`;
		}
		url = `http://localhost:3000` + url;
		return request(url, 'get');
};

export {
		requestGet,
};
