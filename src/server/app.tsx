import {Routes} from "react-router-dom";
import {routes} from "@shared/routes";
import * as React from "react";
import {RenderByRoutes} from "@shared/basic";
import {Layout} from "@shared/components/layout/layout";

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
};
