import { db, poemsCol } from './../../config/firebaseConfiguration'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'

export const addPoemErrorMessage = dispatch => message => dispatch({ type: 'ADD_POEM_ERROR_MESSAGE', payload: message })
export const clearPoemErrorMessage = dispatch => () => dispatch({ type: 'CLEAR_POEM_ERROR_MESSAGE' })

export const addNewPoem = dispatch => async poem => {
	try {
		const docRef = doc(db, 'Poems', poem.title)
		const checkDoc = await getDoc(docRef)
		if (checkDoc.exists()) return dispatch({ type: 'ADD_POEM_ERROR_MESSAGE', payload: 'poem with title already exists' })
		await setDoc(docRef, {
			...poem,
			createdAt: serverTimestamp()
		})
	} catch (ex) {
		console.log(ex)
		dispatch({ type: 'ADD_POEM_ERROR_MESSAGE', payload: ex.message })
	}
}