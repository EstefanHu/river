import { postsCol } from './../../config/firebaseConfiguration'
import { getDocs } from 'firebase/firestore'

export const getRecentPosts = dispatch => async page => {
	try {
		console.log(`Getting 'posts' at page ${page}`)
		const posts = await getDocs(postsCol)
		console.log(posts)
	} catch (ex) {
		console.log(ex)
		dispatch({ type: 'ADD_POSTS_ERROR_MESSAGE' })
	}
}