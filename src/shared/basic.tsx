import * as React from 'react';
import {Route, Outlet, Link} from "react-router-dom";

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
												<Link to="redirect">redirect</Link>
										</li>
										<li>
												<Link to="production">Production</Link>
										</li>
								</ul>
						</nav>
						<hr/>
						<Outlet/>
				</div>
		);
}

//  渲染，通过 routes 数据
const RenderByRoutes = (routes: RouteConfig) => {
		return routes.map((route, index) => {
				//  有子路由
				if (route.children && route.children.length) {
						const {children} = route;
						delete route.children;
						return (
								<Route {...route}>
										{RenderByRoutes(children)}
								</Route>
						)
				}
				return (
						<Route {...route}/>
				)
		})
}

export {
		Layout,
		RenderByRoutes,
}
