import authReducer from "./auth"
import modalReducer from "./modal"

const mainReducer = ({ auth, modal }, action) => ({
    auth: authReducer(auth, action),
    modal: modalReducer(modal, action)
})

export default mainReducer