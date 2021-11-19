const draftReducer = (state, { type, payload }) => {
    switch (type) {
        case 'ADD_DRAFT_ERROR_MESSAGE':
            return {
                ...state,
                draftErrorMessage: payload
            }

        case 'CLEAR_DRAFT_ERROR_MESSAGE':
            return {
                ...state,
                draftErrorMessage: ''
            }

        default:
            return state
    }
}

export default draftReducer