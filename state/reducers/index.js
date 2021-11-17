import authReducer from './auth'
import modalReducer from './modal'
import postReducer from './post'

const mainReducer = ({ auth, modal, post }, action) => ({
	auth: authReducer(auth, action),
	modal: modalReducer(modal, action),
	post: postReducer(post, action)
})

export default mainReducer