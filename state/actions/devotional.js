import { db } from './../../config/firebaseConfiguration'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'

export const addDevotionalErrorMessage = dispatch => message => dispatch({ type: 'ADD_DEVOTIONAL_ERROR_MESSAGE', payload: message })
export const clearDevotionalErrorMessage = dispatch => () => dispatch({ type: 'CLEAR_DEVOTIONAL_ERROR_MESSAGE' })

export const addNewDevotional = dispatch => async devotional => {
    try {
        const { title, body } = devotional
        if (title === '' || body === '') {
            dispatch({ type: 'ADD_DEVOTIONAL_ERROR_MESSAGE', payload: 'All fields are requried' })
            return {
                status: 'failure',
                message: 'devotional requires all datafields to be entered'
            }
        }
        const docRef = doc(db, 'Devotionals', title)

        const checkDoc = await getDoc(docRef)
        if (checkDoc.exists()) {
            dispatch({ type: 'ADD_DEVOTIONAL_ERROR_MESSAGE', payload: 'Devotional already exists with this title' })
            return {
                status: 'failure',
                message: `devotional with title '${title}' alreadu exists`
            }
        }

        await setDoc(docRef, {
            ...devotional,
            createdAt: serverTimestamp()
        })
        return {
            status: 'success',
            message: `devotional ${title} has been added to the database`
        }
    } catch (ex) {
        console.log(ex)
        dispatch({ type: 'ADD_DEVOTIONAL_ERROR_MESSAGE', payload: ex.message })
    }
}