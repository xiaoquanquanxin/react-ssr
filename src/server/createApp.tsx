import ssrTemplate from './serverUtils/ssrTemplate';
//	静态资源服务器
import koaStatic from 'koa-static';
import {matchPath} from "react-router-dom";
import routes from "@shared/routes";

//	路由
const koaRouter = require('@koa/router');
const router = new koaRouter();

const koa = require("koa");
const app = new koa();
export default (mode) => {
		//  路由请求
		router.get(['/about', '/test', '/params/:id', '/'], async ctx => {
				const {url} = ctx.req;
				const {path} = ctx.request;
				console.log('客户端请求url是', url);
				// console.log('客户端请求路由是', path);
				const promises = [];
				routes.some(route => {
						//  匹配路由
						const match = matchPath(path, route.path);
						if (match) {
								if (route.loadData) {
										promises.push(route.loadData({from: "server"}));
								}
						}
						return match;
				});
				const ssrData = await Promise.all(promises);
				//  todo    这里，以后考虑，多层路由的情况
				ctx.body = ssrTemplate(mode, path, ssrData[0]);
		});
		//  api接口请求
		router.get(['/api/getData'], ctx => {
				ctx.body = JSON.stringify({name: `接口返回的数据`});
		});
		//  路由注册到app上
		app.use(router.routes());
		app.use(router.allowedMethods());
		//  启动静态资源服务器
		app.use(koaStatic('../client'));

		//  路由重定向，前面已经挂载了路由和api，这是最后挂载的东西
		app.use((ctx, next) => {
				if (ctx.response.status == 404) {
						const {url} = ctx.req;
						console.log('重定向的url是', url);
						ctx.response.redirect('/');
				}
		})

		app.listen(3000, () => {
				console.clear();
				process.nextTick(() => {
						console.log('服务已经启动');
						console.log(mode);
				});
		});
}
