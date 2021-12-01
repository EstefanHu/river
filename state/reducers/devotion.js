const devotionalReducer = (state, { type, payload }) => {
    switch (type) {
        case 'ADD_DEVOTIONAL_ERROR_MESSAGE':
            return {
                ...state,
                devotionalErrorMessage: payload
            }

        case 'CLEAR_DEVOTIONAL_ERROR_MESSAGE':
            return {
                ...state,
                devotionalErrorMessage: ''
            }

        default:
            return state
    }
}

export default devotionalReducer