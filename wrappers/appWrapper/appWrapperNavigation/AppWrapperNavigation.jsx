import React from 'react'
import Link from 'next/link'

import styles from './AppWrapperNavigation.module.scss'

const AppWrapperNavigation = () => {

    return (
        <nav className={styles.AppWrapperNavigation}>
            <Link href='/app'>
                <a>home</a>
            </Link>

            <Link href='/app/write'>
                <a>write</a>
            </Link>

            <Link href='/app/profile'>
                <a>profile</a>
            </Link>
        </nav>
    )
}

export default AppWrapperNavigation