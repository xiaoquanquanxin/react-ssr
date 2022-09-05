import * as React from "react";
import { Route } from "react-router-dom";

//  渲染，通过 routes 数据
const RenderByRoutes = (routes: RouteConfig) => {
  return routes.map((route, index) => {
    //  有子路由
    if (route.children && route.children.length) {
      const { children } = route;
      delete route.children;
      return <Route {...route}>{RenderByRoutes(children)}</Route>;
    }
    return <Route {...route} />;
  });
};

export { RenderByRoutes };
