import * as React from 'react';
import {useReducer} from "react";
import {useEffect} from "react";
import {requestGetData} from "@client/request";
import {getInitialState, reducer} from "@client/store/reducer";

function About() {
		const [data, setData] = useReducer(reducer, getInitialState());
		useEffect(() => {
				(async () => {
						const result = await requestGetData() as initialState;
						result.name += ' \t回来的';
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
