import * as React from 'react';
import {Routes, Route, Outlet, Link} from "react-router-dom";

import routes from "@shared/routes";

function Layout() {
		return (
				<div>
						<nav>
								<ul>
										<li>
												<Link to="/">Home</Link>
										</li>
										<li>
												<Link to="about">About</Link>
										</li>
										<li>
												<Link to="test">Test</Link>
										</li>
										<li>
												<Link to="params/123">Params</Link>
										</li>
										<li>
												<Link to="redirect">redirect</Link>
										</li>
								</ul>
						</nav>
						<hr/>
						<Outlet/>
				</div>
		);
}

const App = () => {
		return (
				<>
						<Layout/>
						<Routes>
								{
										routes.map((route, index) => {
												return (
														<Route {...route} key={index}/>
												)
										})
								}
						</Routes>
				</>
		);
};

export {
		App,
}
