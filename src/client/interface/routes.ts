/**
 * 路由接口
 * */
//  每一个路由节点
interface Route {
		path: string;
		element: JSX.Element,
		loadData?: (x?) => any,
		routes?: RouteConfig,
}

//  路由表
interface RouteConfig extends Array<Route> {
}

