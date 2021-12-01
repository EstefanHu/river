const poemReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_POEM_ERROR_MESSAGE':
			return {
				...state,
				poemErrorMessage: payload
			}

		case 'CLEAR_POEM_ERROR_MESSAGE':
			return {
				...state,
				poemErrorMessage: ''
			}

		default:
			return state
	}
}

export default poemReducer