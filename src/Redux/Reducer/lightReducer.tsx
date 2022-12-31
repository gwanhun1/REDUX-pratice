const initialState = false;

function lightReducer(state: boolean = initialState, action: any) {
	switch (action.type) {
		case 'LIGHT': {
			return !state;
		}
		default: {
			return state;
		}
	}
}

export default lightReducer;
