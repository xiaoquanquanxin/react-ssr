import * as React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useReducer} from "react";
import {getInitialState, reducer} from "@client/store/reducer";
import {requestGetProductionDetailData} from "@shared/request/production/requestProduction";

function ProductionDetail() {
		const params = useParams();
		const [data, setData] = useReducer(reducer, getInitialState());
		useEffect(() => {
				(async () => {
						//  是否重新发请求
						if (data && data.name) {
								return;
						}
						const result = await requestGetProductionDetailData(params) as initialState;
						result.name += ' 此为请求返回';
						setData({type: 'set', newData: result});
				})();
		}, []);
		return (
				<div>
						<h2>{params.id ? "编辑" : "新建"}</h2>
				</div>
		);
}

export default ProductionDetail;
