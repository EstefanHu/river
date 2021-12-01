import React from 'react'
import { useRouter } from 'next/router'

import AppWrapperNavigation from './AppWrapperNavigation'

import styles from './AppWrapper.module.scss'

const AppWrapper = ({ children }) => {
	const router = useRouter()

	return (
		<div className={styles.AppWrapper}>
			<AppWrapperNavigation />

			<div className={styles.MainContent}>
				<header className={styles.MainContentHeader}>
					<button
						type="button"
						onClick={() => router.push('/app/write')}
					>write</button>
				</header>

				<div className={styles.PageContent}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default AppWrapper