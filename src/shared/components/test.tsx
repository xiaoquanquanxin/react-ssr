import * as React from 'react';
import {useEffect, useState} from "react";

function Test() {
		const [data, getData] = useState(null);
		return (
				<div>
						<h2>Home</h2>
						<p>{data && data.name}</p>
				</div>
		);
}

export default Test;
