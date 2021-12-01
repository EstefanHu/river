import { db } from './../../config/firebaseConfiguration'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'

export const addStoryErrorMessage = dispatch => message => dispatch({ type: 'ADD_STORY_ERROR_MESSAGE', payload: message })
export const clearStoryErrorMessage = dispatch => () => dispatch({ type: 'CLEAR_STORY_ERROR_MESSAGE' })

export const addNewStory = dispatch => async story => {
    try {
        const { title, body } = story
        if (title === '' || body === '') {
            dispatch({ type: 'ADD_STORY_ERROR_MESSAGE', payload: 'All fields are requried' })
            return {
                status: 'failure',
                message: 'story requires all datafields to be entered'
            }
        }
        const docRef = doc(db, 'Stories', title)

        const checkDoc = await getDoc(docRef)
        if (checkDoc.exists()) {
            dispatch({ type: 'ADD_STORY_ERROR_MESSAGE', payload: 'Story already exists with this title' })
            return {
                status: 'failure',
                message: `story with title '${title}' alreadu exists`
            }
        }

        await setDoc(docRef, {
            ...story,
            createdAt: serverTimestamp()
        })
        return {
            status: 'success',
            message: `story ${title} has been added to the database`
        }
    } catch (ex) {
        console.log(ex)
        dispatch({ type: 'ADD_STORY_ERROR_MESSAGE', payload: ex.message })
    }
}