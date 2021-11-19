import React from 'react'

import WriteWrapper from '../../../../wrappers/writeWrapper'

import styles from 'Devotional.module.scss'

const Devotional = () => {
    return (
        <WriteWrapper>
            <section className={styles.Devotional}>
                <h1>New Devotional</h1>
            </section>
        </WriteWrapper>
    )
}

export default Devotional