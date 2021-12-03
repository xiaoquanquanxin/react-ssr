import {requestGet} from "@shared/request";

const requestGetProductionData = (params?) => {
		return requestGet('/api/getProductionData', params);
};

export {
		requestGetProductionData
}
