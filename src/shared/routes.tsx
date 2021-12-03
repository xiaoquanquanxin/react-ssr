import React from "react";
import Home from "@shared/components/home/home";
import About from "@shared/components/about/about";
import {requestGetData} from "@shared/request";
import Test from "@shared/components/test/test";
import Params from "@shared/components/params/params";
import Production from "@shared/components/production/production";
import AddProduction from "@shared/components/production/addProduction/addProduction";

const routes: RouteConfig = [
		{
				path: "/",
				element: <Home/>,
				key: '0',
		},
		{
				path: "/about",
				element: <About/>,
				loadData: async (params) => requestGetData(params),
				key: '1',
		},
		{
				path: "/test",
				element: <Test/>,
				key: '2',
		},
		{
				path: '/params/:id',
				element: <Params/>,
				key: '3',
		},
		{
				path: "/production",
				element: <Production/>,
				key: '4',
				children: [
						{
								path: "add",
								element: <AddProduction/>,
								key: '401',
						}
				]
		},
];


const getPath = (routes: RouteConfig, parentPath: string = ''): Array<string> => {
		const list = [];
		routes.forEach(route => {
				const path = parentPath ? (parentPath + '/' + route.path) : route.path;
				if (route.children && route.children.length) {
						const children = getPath(route.children, path);
						list.push(...children);
				}
				list.push(path);
		});
		return list;
}

export {
		routes,
		getPath,
};
