import React, { createContext, useContext, useReducer } from 'react'
import mainReducer from './reducers'
import mainActions from './actions'

const initialState = {
    auth: {
        authErrorMessage: '',
        isAuthing: false,
        user: null,
    },
    devotional: {
        devotionalErrorMessage: '',
        devotionals: [],
    },
    draft: {
        draftErrorMessage: '',
        drafts: []
    },
    modal: { selectedModal: '' },
    post: {
        postErrorMessage: '',
        posts: []
    },
    poem: {
        poemErrorMessage: '',
        poems: [],
    },
    story: {
        storyErrorMessage: '',
        stories: [],
    }
}

const StateContext = createContext(initialState)

export const StateProvider = ({ children }) => {
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

export const useGlobalState = () => useContext(StateContext)