import React from "react";
import Home from "@shared/components/home";
import About from "@shared/components/about";


const getData = () => {
		return {name: "getData的数据"};
}
const routes = [
		{
				path: "/",
				element: <Home/>,

		},
		{
				path: "/about",
				element: <About/>,
				loadData: () => getData()
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
		}
];


export default routes;
