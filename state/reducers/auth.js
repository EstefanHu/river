const authReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_AUTH_ERROR_MESSAGE':
			return {
				...state,
				isAuthing: false,
				authErrorMessage: payload
			}

		case 'CLEAR_AUTH_ERROR_MESSAGE':
			return {
				...state,
				authErrorMessage: ''
			}

		default:
			return state
	}
}

export default authReducer