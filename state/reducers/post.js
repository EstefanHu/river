const postReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_POST_ERROR_MESSAGE':
			return {
				...state,
				postErrorMessage: payload
			}

		case 'CLEAR_POST_ERROR_MESSAGE':
			return {
				...state,
				postErrorMessage: ''
			}

		case 'GET_POSTS':
			return {
				...state,
				posts: [
					...state.posts,
					...payload
				]
			}

		default:
			return state
	}
}

export default postReducer