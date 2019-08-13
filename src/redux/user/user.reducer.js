const INITIAL_STATE = {
	currentUser: null
};

const userReducer = (currState = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return {
				...currState,
				currentUser: action.payload
			};

		default:
			return currState;
	}
};

export default userReducer;
