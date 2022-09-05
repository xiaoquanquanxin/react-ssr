import * as React from "react";
import ssrTemplate from "./serverUtils/ssrTemplate";
//	静态资源服务器
import koaStatic from "koa-static";
import { matchPath } from "react-router-dom";
import { routes, getNodeJsRoutes } from "@shared/routes";
import { allGetApiList } from "@shared/request/apiInterface";

//	路由
const koaRouter = require("@koa/router");
const router = new koaRouter();

const koa = require("koa");
const app = new koa();
export default (mode) => {
  console.log("服务端路由");
  const pathList = getNodeJsRoutes(routes);

  //  路由请求
  router.get(
    pathList.map((v) => v.path),
    async (ctx) => {
      // const {url} = ctx.req;
      const { path } = ctx.request;
      // console.log('客户端请求url是', url);
      console.log("客户端请求路由是", path);
      // console.log(ctx.request);
      const promises = [];
      pathList.some((route) => {
        //  匹配路由
        const match = matchPath(route.path, path);
        if (match) {
          console.log("服务端匹配的路由是");
          console.log(route.element);
          console.log("🍉");
          const Component = route.element;
          console.log(Component);
          return;
          if (route.loadData) {
            const { params } = match;
            promises.push(route.loadData(params));
          }
        }
        return match;
      });
      const ssrData = await Promise.all(promises);
      //  todo    这里，以后考虑，多层路由的情况
      ctx.body = ssrTemplate(mode, path, ssrData[0], pathList);
    }
  );
  //  api接口请求
  router.get(allGetApiList, (ctx) => {
    console.log("进入 node js 的 api");
    ctx.body = JSON.stringify({ name: `接口返回的数据` });
  });
  //  路由注册到app上
  app.use(router.routes());
  app.use(router.allowedMethods());
  //  启动静态资源服务器
  app.use(koaStatic("../client"));

  //  路由重定向，前面已经挂载了路由和api，这是最后挂载的东西
  app.use((ctx, next) => {
    if (ctx.response.status == 404) {
      const { url } = ctx.req;
      console.log("重定向的url是", url);
      ctx.response.redirect("/");
    }
  });

  app.listen(3000, () => {
    // console.clear();
    process.nextTick(() => {
      console.log("服务已经启动");
      console.log(mode);
    });
  });
};
