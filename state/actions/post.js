import firebase from 'firebase/app'

export const getRecentPosts = dispatch => async page => {
	try {
		console.log(`Getting 'posts' at page ${page}`)
		const posts = await firebase.firestore().collection('Posts').get()
		console.log(posts)
	} catch (ex) {
		console.log(ex)
		dispatch({ type: 'ADD_POSTS_ERROR_MESSAGE' })
	}
}