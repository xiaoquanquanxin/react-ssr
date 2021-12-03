import {requestGet} from "@shared/request";

const requestGetAboutData = (params?) => {
		return requestGet('/api/getAboutData', params);
};

export {
		requestGetAboutData
}
