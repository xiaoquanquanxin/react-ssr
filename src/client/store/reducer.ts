const initialState: initialState = {name: null};
export const getInitialState = () => {
		return initialState;
}
export const createInitialState = (data) => {
		Object.assign(initialState, data);
}

export function reducer(state, action) {
		const {type, newData} = action;
		switch (type) {
				case 'set':
						return {
								...state,
								...newData
						}
				default:
						throw new Error();
		}
}
