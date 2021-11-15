import React from 'react'

import AppWrapperHeader from './appWrapperHeader'
import AppWrapperNavigation from './AppWrapperNavigation'

import styles from './AppWrapper.module.scss'

const AppWrapper = ({ children }) => {

    return (
        <div className={styles.AppWrapper}>
            <AppWrapperHeader />
            <div className={styles.MainContent}>
                <AppWrapperNavigation />

                <div className={styles.PageContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppWrapper