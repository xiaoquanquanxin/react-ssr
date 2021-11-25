import {BrowserRouter} from 'react-router-dom';
import {App} from "../shared/app";
ReactDOM.render(
	<BrowserRouter>
		<div>
			<App/>
		</div>
	</BrowserRouter>,
	document.getElementById('app')
);
