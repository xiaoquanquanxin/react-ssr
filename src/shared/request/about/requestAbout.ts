import {requestGet} from "@shared/request";
import {getAboutData} from "@shared/request/apiInterface";

const requestGetAboutData = (params?) => {
		return requestGet(getAboutData, params);
};

export {
		requestGetAboutData
}
