import firebase from 'firebase'

export const addAuthErrorMessage = dispatch => message => dispatch({ type: 'ADD_AUTH_ERROR_MESSAGE', payload: message })
export const clearAuthErrorMessage = dispatch => message => dispatch({ type: 'CLEAR_AUTH_ERROR_MESSAGE' })

export const userSignIn = dispatch => async ({ email, password }, callback) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        callback()
    } catch ({ code, message }) {
        await firebase.auth().signOut()

        switch (code) {
            case 'auth/user-not-found':
                return dispatch({ type: 'ADD_AUTH_ERROR_MESSAGE', payload: 'User is not found' })
            default:
                return dispatch({ type: 'ADD_AUTH_ERROR_MESSAGE', payload: 'Sign in failed' })
        }
    }
}

