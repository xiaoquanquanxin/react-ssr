import React from "react";
import Home from "@shared/components/home/home";
import About from "@shared/components/about/about";
import {requestGetData} from "@shared/request";
import Test from "@shared/components/test/test";
import Params from "@shared/components/params/params";
import Production from "@shared/components/production/production";
import AddProduction from "@shared/components/production/addProduction/addProduction";
import EditProduction from "@shared/components/production/editProduction/editProduction";

const routes: RouteConfig = [
		{
				path: "/",
				element: <Home/>,
				exact: true,
		},
		{
				path: "/about",
				element: <About/>,
				loadData: async (params) => requestGetData(params),
		},
		{
				path: "/test",
				element: <Test/>,
		},
		{
				path: '/params/:id',
				element: <Params/>,
		},
		{
				path: "/production",
				element: <Production/>,
				children: [
						{
								path: "add",
								element: <AddProduction/>,
						},
						{
								path: "edit",
								element: <EditProduction/>,
						}
				]
		},
];

//  设置 key
(function setKey(routes: RouteConfig, parentKey: string = ''): void {
		routes.forEach((route, index) => {
				const key = parentKey ? parentKey + '-' + index : index.toString();
				if (route.children && route.children.length) {
						setKey(route.children, key);
				}
				route.key = key;
		})
})(routes);

//  获取 node js 路由
const getNodeJsRoutes = (routes: RouteConfig, parentPath: string = ''): Array<string> => {
		const list = [];
		routes.forEach(route => {
				const path = parentPath ? (parentPath + '/' + route.path) : route.path;
				if (route.children && route.children.length) {
						const children = getNodeJsRoutes(route.children, path);
						list.push(...children);
				}
				list.push(path);
		});
		return list;
}

export {
		routes,
		getNodeJsRoutes,
};
