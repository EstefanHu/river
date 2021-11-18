import { db, auth } from './../../config/firebaseConfiguration'

export const addAuthErrorMessage = dispatch => message => dispatch({ type: 'ADD_AUTH_ERROR_MESSAGE', payload: message })
export const clearAuthErrorMessage = dispatch => () => dispatch({ type: 'CLEAR_AUTH_ERROR_MESSAGE' })

