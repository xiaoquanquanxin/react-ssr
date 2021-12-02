import * as React from 'react';
import {useReducer} from "react";
import {useEffect} from "react";
import {requestGetData} from "@shared/request";
import {getInitialState, reducer} from "@client/store/reducer";

function About() {
		const [data, setData] = useReducer(reducer, getInitialState());
		useEffect(() => {
				(async () => {
						//  是否重新发请求
						if (data && data.name) {
								return;
						}
						const result = await requestGetData() as initialState;
						result.name += ' 此为请求返回';
						setData({type: 'set', newData: result});
				})();
		}, []);
		return (
				<div>
						<h2>About</h2>
						<p>{data.name}</p>
				</div>
		);
}

export default About;
