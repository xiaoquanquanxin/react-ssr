const React = require("react");
import {StaticRouter} from "react-router-dom/server";
import App from "../shared/app";
//	react 官网服务端渲染-将组件渲染成静态标记，这就是将react代码在服务端渲染的部分
const {renderToString} = require('react-dom/server');

const ssrFn = (ssrComponent) => `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>react-ssr</title>
<!--    <script src="https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js"></script>-->
<!--   	<script src="https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>-->
<!--   	<script src="https://cdn.bootcdn.net/ajax/libs/react-router/5.2.0/react-router.min.js"></script>-->
<!--   	<script src="https://cdn.bootcdn.net/ajax/libs/react-router-dom/5.2.0/react-router-dom.min.js"></script>-->
   	
   	<script src="https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.development.min.js"></script>
   	<script src="https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.development.min.js"></script>
   	<script src="https://cdn.bootcdn.net/ajax/libs/react-router/5.2.0/react-router.min.js"></script>
   	<script src="https://cdn.bootcdn.net/ajax/libs/react-router-dom/5.2.0/react-router-dom.min.js"></script>
   	<style>
</style>
</head>
<body>
<div id="app">
${ssrComponent}
</div>
</body>
<script src="/bundle.js"></script>
</html>`;


export default (url) => ssrFn(
	renderToString(
		<StaticRouter location={url}>
			<App/>
		</StaticRouter>)
);

