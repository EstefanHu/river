import authReducer from "./auth"

const mainReducer = ({ auth }, action) => ({
    auth: authReducer(auth, action),
})

export default mainReducer