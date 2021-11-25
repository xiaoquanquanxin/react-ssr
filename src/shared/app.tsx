import * as React from 'react';
import {Routes, Route, Outlet, Link} from "react-router-dom";

import About from './components/about';
import Home from './components/home';

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
				<Routes>
						<Route path="/" element={<Layout/>}>
								<Route index element={<Home/>}/>
								<Route path="about" element={<About/>}/>
						</Route>
				</Routes>
		);
};

export {
		App,
}
