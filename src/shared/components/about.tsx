import * as React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {requestGetData} from "@client/request";

function About() {
		const [data, getData] = useState(null);
		useEffect(() => {
				(async () => {
						const result = await requestGetData();
						getData(result.name);
				})();
		}, []);
		return (
				<div>
						<h2>About</h2>
						<p>{data}</p>
				</div>
		);
}

export default About;
