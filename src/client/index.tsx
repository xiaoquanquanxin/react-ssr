import {BrowserRouter} from 'react-router-dom';
import {App} from '@client/app';
// @ts-ignore
ReactDOM.render(
		(
				// @ts-ignore
				<BrowserRouter>
						{/*@ts-ignore*/}
						<App/>
				</BrowserRouter>
		),
		document.getElementById('app')
);
