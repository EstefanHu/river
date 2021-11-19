import React from 'react'

import WriteWrapperHeader from './writeWrapperHeader'

import styles from './WriteWrapper.module.scss'

const WriteWrapper = ({ children }) => {

    return (
        <div className={styles.WriteWrapper}>
            <WriteWrapperHeader />

            <section className={styles.Main}>
                {children}
            </section>
        </div>
    )
}

export default WriteWrapper