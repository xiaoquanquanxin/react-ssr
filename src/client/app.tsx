//  设置重定向
import {Navigate} from "react-router-dom";
import React from "react";
import {routes} from "@shared/routes";
import {Routes} from "react-router-dom";
import {Layout, RenderByRoutes} from "@shared/basic";

routes.push({
		path: '*',
		element: (
				<>
						<Navigate replace={true} to={'/'}/>
				</>
		),
		redirectTo: "/",
		key: '-1',
},)

//  服务端app
const App = () => {
		return (
				<>
						<Layout key={1}/>
						<Routes>
								{RenderByRoutes(routes)}
						</Routes>
				</>
		);
};

export {
		App,
}
