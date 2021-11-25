import {
		setAboutUsMapOpenIndex,
		setAboutUsMapActiveAreaId,
		setComponentDidMountFinish
} from './aboutUs';

//  指定如何把当前 Redux store state 映射到展示组件的 props 中
//  ✅读取state到props
export const mapStateToProps = (
		{
				REDUCER_ABOUT_US_MAP,
		}) => {
		return {
				REDUCER_ABOUT_US_MAP,
		};
};

//  触发
//  除了读取 state，容器组件还能分发 action。
//  类似的方式，可以定义 mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
//  ✅通过dispatch触发action到原始的state
export const mapDispatchToProps = (dispatch) => {
		return {
		    //  关于我的，地图相关
				setAboutUsMapOpenIndex: (openIndex) => {
						dispatch(setAboutUsMapOpenIndex(openIndex));
				},
				//  同上
				setAboutUsMapActiveAreaId: (activeAreaId, activeAreaName) => {
						dispatch(setAboutUsMapActiveAreaId(activeAreaId, activeAreaName));
				},
				//  组件初始化完成
				setComponentDidMountFinish: (componentDidMountFinish) => {
						dispatch(setComponentDidMountFinish(componentDidMountFinish));
				}
		};
};

