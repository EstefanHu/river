import React from 'react'
import Link from 'next/link'

import styles from './AppWrapperNavigation.module.scss'

const AppWrapperNavigation = () => {

    return (
        <nav className={styles.AppWrapperNavigation}>
            <Link href='/app'>
                <a><h1>home</h1></a>
            </Link>

            <Link href='/app/inbox'>
                <a><h1>inbox</h1></a>
            </Link>

            <Link href='/app/profile'>
                <a><h1>profile</h1></a>
            </Link>
        </nav>
    )
}

export default AppWrapperNavigation