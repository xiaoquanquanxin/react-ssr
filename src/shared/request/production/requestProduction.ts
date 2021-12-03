import {requestGet} from "@shared/request";
import {getProductionData} from "@shared/request/apiInterface";

//  查看产品详情数据
const requestGetProductionDetailData = (params?) => {
		console.log('查看产品详情数据参数****************', params);
		return requestGet(getProductionData, params);
};

export {
		requestGetProductionDetailData
}
