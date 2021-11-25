import App from "../shared/app";
import {BrowserRouter} from 'react-router-dom';

const React = require('react');
const ReactDOM = require('react-dom');
console.log(App);
export default ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('app')
);
