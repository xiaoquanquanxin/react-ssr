import React from "react";
import {requestGetAboutData} from "@shared/request/about/requestAbout";
import {requestGetProductionDetailData} from "@shared/request/production/requestProduction";
import {AsyncRouter} from "@shared/components/asyncLoad/asyncLoad";
const Home = AsyncRouter(() => import("@shared/components/home/home"));
const About = AsyncRouter(() => import("@shared/components/about/about"));
const Test = AsyncRouter(() => import("@shared/components/test/test"));
const Production = AsyncRouter(() => import("@shared/components/production/production"));
const ProductionDetail = AsyncRouter(() => import("@shared/components/production/productionDetail/productionDetail"));

debugger
const routes: RouteConfig = [
		{
				path: "/",
				element: <Home/>,
				exact: true,
		},
		{
				path: "/about",
				element: <About/>,
				loadData: async (params) => requestGetAboutData(params),
		},
		{
				path: "/test",
				element: <Test/>,
		},
		{
				path: "/production",
				element: <Production/>,
				children: [
						{
								path: "add",
								element: <ProductionDetail/>,
						},
						{
								path: "edit/:id",
								element: <ProductionDetail/>,
								loadData: async (params) => requestGetProductionDetailData(params),
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
const getNodeJsRoutes = (routes: RouteConfig, parentPath: string = ''): RouteConfig => {
		const list = [];
		routes.forEach(route => {
				const path = parentPath ? (parentPath + '/' + route.path) : route.path;
				if (route.children && route.children.length) {
						const children = getNodeJsRoutes(route.children, path);
						list.push(...children);
				}
				route.path = path;
				list.push(route);
		});
		return list;
}

export {
		routes,
		getNodeJsRoutes,
};
