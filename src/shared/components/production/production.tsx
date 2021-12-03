import * as React from 'react';
import {Link, Outlet} from "react-router-dom";

function Production(props) {
		console.log('production 的 props', props);
		return (
				<div>
						<h2>Production</h2>
						<ul>
								<li>
										<Link to="add">AddProduction</Link>
								</li>
						</ul>
						<Outlet key={2}/>
				</div>
		);
}

export default Production;
