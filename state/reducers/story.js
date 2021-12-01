const storyReducer = (state, { type, payload }) => {
    switch (type) {
        case 'ADD_STORY_ERROR_MESSAGE':
            return {
                ...state,
                storyErrorMessage: payload
            }

        case 'CLEAR_STORY_ERROR_MESSAGE':
            return {
                ...state,
                storyErrorMessage: ''
            }

        default:
            return state
    }
}

export default storyReducer