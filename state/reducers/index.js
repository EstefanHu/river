import authReducer from './auth'
import devotionalReducer from './devotional'
import draftReducer from './draft'
import modalReducer from './modal'
import poemReducer from './poem'
import postReducer from './post'

const mainReducer = ({ auth, devotional, draft, modal, poem, post }, action) => ({
	auth: authReducer(auth, action),
	devotional: devotionalReducer(devotional, action),
	draft: draftReducer(draft, action),
	modal: modalReducer(modal, action),
	poem: poemReducer(poem, action),
	post: postReducer(post, action)
})

export default mainReducer