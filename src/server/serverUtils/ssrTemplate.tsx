const React = require("react");
const fs = require("fs");
import {createInitialState} from "@client/store/reducer";
import {StaticRouter} from "react-router-dom/server";
import {App} from "@server/app";
//	react 官网服务端渲染-将组件渲染成静态标记，这就是将react代码在服务端渲染的部分
const {renderToString} = require('react-dom/server');
import getCdnScripts from './getCdnScripts';

const getTemplate = (mode, ssrData = {}, ssrComponent) => {
		let template = fs.readFileSync('../client/index.html').toString();
		//  context
		const contextString = JSON.stringify(ssrData);
		template = template.replace('<!--ssrData-->', `<script>window.initialState=${contextString}</script>`);
		//	替换cdn
		template = template.replace('<!--cdn-->', getCdnScripts(mode));
		//	替换服务端渲染初始值
		template = template.replace('<!--ssrComponent-->', ssrComponent);
		return template;
};
/**
 * @param {string} mode
 * @param {string} url
 * @param {any} ssrData
 * */
const ssrTemplate = (mode, url, ssrData) => {
		createInitialState(ssrData);
		return getTemplate(
				mode,
				ssrData,
				renderToString(
						<StaticRouter location={url}>
								<App/>
						</StaticRouter>
				)
		);
}

export default ssrTemplate;
