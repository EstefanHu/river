import { db, poemsCol } from './../../config/firebaseConfiguration'
import { doc, collection, getDoc, setDoc, addDoc, serverTimestamp } from 'firebase/firestore'

export const addPoemErrorMessage = dispatch => message => dispatch({ type: 'ADD_POEM_ERROR_MESSAGE', payload: message })
export const clearPoemErrorMessage = dispatch => () => dispatch({ type: 'CLEAR_POEM_ERROR_MESSAGE' })

export const addNewPoem = dispatch => async poem => {
	try {
		if (poem.title === '' || poem.body === '') {
			dispatch({ type: 'ADD_POEM_ERROR_MESSAGE', payload: 'All fields must be provided' })
			return {
				status: 'failure',
				message: 'poem requires all datafields to be entered'
			}
		}
		const docRef = doc(db, 'Poems', poem.title)

		const checkDoc = await getDoc(docRef)
		if (checkDoc.exists()) {
			dispatch({ type: 'ADD_POEM_ERROR_MESSAGE', payload: 'poem with title already exists' })
			return {
				status: 'failure',
				message: `poem with title ${poem.title} already exists`
			}
		}
		await setDoc(docRef, {
			...poem,
			createdAt: serverTimestamp()
		})
		return {
			status: 'success',
			message: `poem ${poem.title} has been added to the database`
		}
	} catch (ex) {
		console.log(ex)
		dispatch({ type: 'ADD_POEM_ERROR_MESSAGE', payload: ex.message })
	}
}