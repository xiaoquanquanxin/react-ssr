import React from "react";
import { RouteConfig } from 'react-router-config';
import Home from "@shared/components/home";
import About from "@shared/components/about";
import {requestGetData} from "@shared/request";
import Test from "@shared/components/test";

const routes: RouteConfig = [
		{
				path: "/",
				element: <Home/>,

		},
		{
				path: "/about",
				element: <About/>,
				loadData: async (params) => requestGetData(params),
				// routes: [
				// 		{
				// 				path: "/tacos/bus",
				// 				// component: Bus
				// 		},
				// 		{
				// 				path: "/tacos/cart",
				// 				// component: Cart
				// 		}
				// ]
		},
		{
				path: "/test",
				element: <Test/>,
		}
];


export default routes;
