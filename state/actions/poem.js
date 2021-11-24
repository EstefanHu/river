import { db, poemsCol } from './../../config/firebaseConfiguration'

export const addPoemErrorMessage = dispatch => message => dispatch({ type: 'ADD_POEM_ERROR_MESSAGE', payload: message })
export const clearPoemErrorMessage = dispatch => () => dispatch({ type: 'CLEAR_POEM_ERROR_MESSAGE' })

export const addNewPoem = dispatch => poem => {
	try {
		console.log('Adding new POEM')
		console.log(poem)
	} catch (ex) {
		console.log(ex)
		dispatch({ type: 'ADD_POEM_ERROR_MESSAGE', payload: ex.message })
	}
}