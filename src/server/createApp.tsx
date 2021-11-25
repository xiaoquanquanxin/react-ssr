import htmlTemplate from './htmlTemplate';
//	静态资源服务器
import koaStatic from 'koa-static';
//	路由
const koaRouter = require('@koa/router');
const router = new koaRouter();

const koa = require("koa");
const app = new koa();
export default (mode) => {
		const htmlTemplateFn = htmlTemplate(mode);
		router.get(['/about', '/'], ctx => {
				console.log('客户端请求是', ctx.req.url);
				ctx.body = htmlTemplateFn(ctx.req.url);
		});
		//  接口请求
		router.get(['/api/getData'], ctx => {
				ctx.body = JSON.stringify({data: '正常'});
		})
		//  路由注册到app上
		app.use(router.routes());
		app.use(router.allowedMethods());

		//  启动静态资源服务器
		app.use(koaStatic('assets'));
		app.listen(3000, () => {
				console.clear();
				process.nextTick(() => {
						console.log('服务已经启动');
						console.log(mode);
				});
		});
}
