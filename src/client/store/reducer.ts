//  Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，
import {combineReducers} from 'redux';

import {REDUCER_ABOUT_US_MAP} from './aboutUs';

const AppRedux = combineReducers({
		REDUCER_ABOUT_US_MAP,
});
export default AppRedux;

