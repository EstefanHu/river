export const openModal = dispatch => modal => dispatch({ type: 'OPEN_MODAL', payload: modal })
export const closeModal = dispatch => () => dispatch({ type: 'CLOSE_MODAL' })
export const switchModal = dispatch => modal => {
    dispatch({ type: 'CLOSE_MODAL' })
    dispatch({ type: 'OPEN_MODAL', value: modal })
}