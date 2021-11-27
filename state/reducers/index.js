import authReducer from './auth'
import draftReducer from './draft'
import modalReducer from './modal'
import poemReducer from './poem'
import postReducer from './post'

const mainReducer = ({ auth, draft, modal, poem, post }, action) => ({
	auth: authReducer(auth, action),
	draft: draftReducer(draft, action),
	modal: modalReducer(modal, action),
	poem: poemReducer(poem, action),
	post: postReducer(post, action)
})

export default mainReducer