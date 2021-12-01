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

		case 'ADD_NEW_POEM':
			return {
				...state,
				poemErrorMessage: '',
				newestPoem: payload
			}

		default:
			return state
	}
}

export default poemReducer