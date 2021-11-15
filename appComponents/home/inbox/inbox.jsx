import React from 'react'
import { useStateValue } from '../../../state'

import styles from './Inbox.module.scss'

const Inbox = () => {
    const { state: { inbox: { } } } = useStateValue()

    return (
        <section className={styles.Inbox}>
            <h1>inbox</h1>
        </section>
    )
}

export default Inbox