import React from 'react'

import WriteWrapperHeader from './writeWrapperHeader'

import styles from './WriteWrapper.module.scss'

const WriteWrapper = ({ children }) => {

    return (
        <div className={styles.WriteWrapper}>
            <WriteWrapperHeader />
            {children}
        </div>
    )
}

export default WriteWrapper