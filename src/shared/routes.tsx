import React from "react";
import Home from "@shared/components/home/home";
import About from "@shared/components/about/about";
import {requestGetData} from "@shared/request";
import Test from "@shared/components/test/test";
import Params from "@shared/components/params/params";
import {Navigate} from "react-router-dom";

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
		},
		{
				path: '/params/:id',
				element: <Params/>
		},
		{
				path: '*',
				element: (<><Navigate replace={true} to={'/'}/></>),
				redirectTo: "/",
		},
];


export default routes;
