import React, { useState } from 'react'
import Link from 'next/link'

import styles from './AppWrapperNavigation.module.scss'

const AppWrapperNavigation = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <nav className={styles.AppWrapperNavigation}>
            <Link href='/app'>
                <a>
                    <h1 className={styles.Logo}><span>the</span>River</h1>
                </a>
            </Link>

            <Link href='/app'>
                <a className={styles.NavLink}><h1>home</h1></a>
            </Link>

            <Link href='/app/inbox'>
                <a className={styles.NavLink}><h1>inbox</h1></a>
            </Link>

            <Link href='/app/profile'>
                <a className={styles.NavLink}><h1>profile</h1></a>
            </Link>

            <Link href='/app/settings'>
                <a className={styles.NavLink}><h1>settings</h1></a>
            </Link>

            {/* <button
                type="button"   
                className={styles.CloseButton}
                onClick={() => null}
            >close</button> */}
        </nav>
    )
}

export default AppWrapperNavigation