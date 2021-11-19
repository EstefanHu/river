import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../../../state'

import styles from './Drafts.module.scss'

const Drafts = () => {
    const { getDrafts } = useGlobalState()

    return (
        <section className={styles.Drafts}>

        </section>
    )
}

export default Drafts