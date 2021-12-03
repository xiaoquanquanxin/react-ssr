/**
 * 路由接口
 * */
//  每一个路由节点
interface Route {
		path: string;
		element: JSX.Element;
		loadData?: (x?) => any;
		children?: RouteConfig;
		redirectTo?: string;
		key: string;
}

//  路由表
// type RouteConfig = Array<Route>;
interface RouteConfig extends Array<Route>{}

