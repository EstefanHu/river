import React from 'react'

import WriteWrapper from './../../../../wrappers/writeWrapper'

import styles from './Story.module.scss'

const Story = () => {

    return (
        <WriteWrapper>
            <div className={styles.Story}>
                <h1>New Story</h1>
            </div>
        </WriteWrapper>
    )
}

export default Story