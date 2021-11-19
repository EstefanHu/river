import React from 'react'

import WriteWrapper from '../../../../wrappers/writeWrapper'

import styles from './Poem.module.scss'

const Poem = () => {

    return (
        <WriteWrapper>
            <div className={styles.Poem}>
                <h1>New Poem</h1>
            </div>
        </WriteWrapper>
    )
}

export default Poem