//  点击的区的id
export const ABOUT_DATA = 'ABOUT_DATA';

/**
 * 设置点击的区的激活id
 * @param {Object} aboutData
 * @return {Object}
 * */
export function setAboutData(aboutData) {
		return {type: ABOUT_DATA, aboutData};
}

//  about
export function REDUCER_ABOUT(state = {
		aboutData: null,
}, action) {
		const {type, aboutData} = action;
		switch (type) {
				case ABOUT_DATA:
						return {
								...state,
								...aboutData,
						};
				default:
						return state;
		}
}
