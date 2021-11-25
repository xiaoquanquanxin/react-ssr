import htmlTemplate from './htmlTemplate';
//	静态资源服务器
import koaStatic from 'koa-static';
//	路由
const koaRouter = require('@koa/router');
const router = new koaRouter();

router.get(['/'], ctx => {
	// const body = htmlTemplate();
	// console.log(body);
	ctx.body = htmlTemplate()
});
const koa = require("koa");
const app = new koa();
//	路由注册到app上
app.use(router.routes());
app.use(router.allowedMethods());
//	启动静态资源服务器
app.use(koaStatic('assets'));
app.listen(3000, () => {
	console.log('服务已经启动');
});