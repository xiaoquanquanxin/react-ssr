import {BrowserRouter} from 'react-router-dom';
import {App} from '@shared/app';
import AppRedux from '@client/store/reducer';
ReactDOM.render(
		(
				<ReactRedux.Provider store={Redux.createStore(AppRedux)}>
						<BrowserRouter>
								<App/>
						</BrowserRouter>
				</ReactRedux.Provider>
		),
		document.getElementById('app')
);
