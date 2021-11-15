import React from 'react'

import AppWrapper from '../../wrappers/appWrapper'
import Inbox from './../../appComponents/home/inbox'

import styles from './App.module.scss'

const App = () => {

    return (
        <AppWrapper>
            <div className={styles.App}>
                <h1>home</h1>
            </div>
        </AppWrapper>
    )
}

export default App