import {requestGet} from "@shared/request";
import {getProductionData} from "@shared/request/apiInterface";

const requestGetProductionData = (params?) => {
		return requestGet(getProductionData, params);
};

export {
		requestGetProductionData
}
