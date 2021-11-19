import { draftsCol } from './../../config/firebaseConfiguration'
import { getDocs } from 'firebase/firestore'

export const addDraftErrorMessage = dispatch => message => dispatch({ type: 'ADD_DRAFT_ERROR_MESSAGE', payload: message })
export const clearDraftErrorMessage = dispatch => () => dispatch({ type: 'CLEAR_DRAFT_ERROR_MESSAGE' })

export const getDrafts = dispatch => async userId => {
    try {
        console.log('GETTING DRAFTS')
        const drafts = await getDocs(draftsCol)
        console.log(`DRAFTS: ${drafts}`)
    } catch (ex) {
        console.log(ex)
        dispatch({ type: 'ADD_DRAFT_ERROR_MESSAGE', payload: ex })
    }
}