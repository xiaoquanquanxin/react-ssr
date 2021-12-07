import {Routes} from "react-router-dom";
import {routes} from "@shared/routes";
import * as React from "react";
import {RenderByRoutes} from "@shared/basic";
import {Layout} from "@shared/components/layout/layout";
import '@client/assets/css/index.css';
//  服务端app
const App = () => {
		return (
				<div style={{display: "flex"}}>
						<Layout key={1}/>
						<Routes>
								{RenderByRoutes(routes)}
						</Routes>
				</div>
		);
};

export {
		App,
};
