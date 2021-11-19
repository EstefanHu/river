import authReducer from './auth'
import draftReducer from './draft'
import modalReducer from './modal'
import postReducer from './post'

const mainReducer = ({ auth, draft, modal, post }, action) => ({
    auth: authReducer(auth, action),
    draft: draftReducer(draft, action),
    modal: modalReducer(modal, action),
    post: postReducer(post, action)
})

export default mainReducer