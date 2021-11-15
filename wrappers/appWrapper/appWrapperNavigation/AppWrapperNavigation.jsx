import React from 'react'
import Link from 'next/link'

import styles from './AppWrapperNavigation.module.scss'

const AppWrapperNavigation = () => {

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
		</nav>
	)
}

export default AppWrapperNavigation