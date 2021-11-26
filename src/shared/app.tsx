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
												<Link to="/about">About</Link>
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
								{routes.map((route, index) => (
										<Route {...route} key={index}/>
								))}
						</Routes>
				</>
		);
};

export {
		App,
}
