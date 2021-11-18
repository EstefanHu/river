import React, { createContext, useContext, useReducer } from 'react'
import mainReducer from './reducers'
import mainActions from './actions'

const getInitialState = () => ({
    auth: {
        authErrorMessage: '',
        isAuthing: false,
        user: null,
    },
    modal: { selectedModal: '' },
    post: {
        postErrorMessage: '',
        posts: [],
    }
})

export const StateContext = createContext([getInitialState(), () => null])

export const StateProvider = ({ children, _state }) => {
    const initialState = _state ?? getInitialState()
    const [state, dispatch] = useReducer(mainReducer, initialState)

    const actions = {}

    Object.keys(mainActions)
        .forEach(actionName => actions[actionName] = mainActions[actionName](dispatch))

    return (
        <StateContext.Provider value={{ state, ...actions }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)