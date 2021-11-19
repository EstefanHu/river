import React, { useEffect } from 'react'
import { useStateValue } from '../../state'

import AppWrapper from '../../wrappers/appWrapper'

import {
	HomeFeed,
} from './../../appComponents/home'

import styles from './App.module.scss'

const App = () => {
	const { getRecentPosts } = useStateValue()

	useEffect(() => {
		getRecentPosts()
	}, [])

	return (
		<AppWrapper>
			<div className={styles.App}>
				<section className={styles.Primary}>
					<HomeFeed />
				</section>

				<aside className={styles.Aside}>

				</aside>
			</div>
		</AppWrapper>
	)
}

export default App