import { userActionTypes } from './user.types';

const INITIAL_STATE = {
	currentUser: null
};

const userReducer = (currState = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.SET_CURRENT_USER:
			return {
				...currState,
				currentUser: action.payload
			};

		default:
			return currState;
	}
};

export default userReducer;
