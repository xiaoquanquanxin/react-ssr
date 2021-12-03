import {requestGet} from "@shared/request";
import {getProductionData} from "@shared/request/apiInterface";

const requestGetProductionDetailData = (params?) => {
		return requestGet(getProductionData, params);
};

export {
		requestGetProductionDetailData
}
