import * as React from 'react';
import {useEffect, useState} from "react";
import {requestGetData} from "../../client/request";

function Home() {
		const [data, getData] = useState(null);
		useEffect(() => {
				(async () => {
						const result = await requestGetData();
						getData(result);
				})();
		}, [])
		useEffect(() => {
				console.log();
		})
		return (
				<div>
						<h2>Home</h2>
						<p>{data && data.name}</p>
				</div>
		);
}

export default Home;
