const modalReducer = (state, { type, payload }) => {
    switch (type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                selectedModal: payload
            }

        case 'CLOSE_MODAL':
            return {
                ...state,
                selectedModal: ''
            }

        default: return state
    }
}

export default modalReducer