import {BrowserRouter} from 'react-router-dom';
import {App} from '@shared/app';
ReactDOM.render(
		(
				<BrowserRouter>
						<App/>
				</BrowserRouter>
		),
		document.getElementById('app')
);
