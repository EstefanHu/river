import React, { useEffect } from 'react'
import { useStateValue } from '../../state'

import AppWrapper from '../../wrappers/appWrapper'
import HomeHeader from './../../appComponents/home/homeHeader'
import Overview from './../../appComponents/home/overview'
import Inbox from './../../appComponents/home/inbox'

import styles from './App.module.scss'

const App = () => {
	// const { getRecentPosts } = useStateValue()

	useEffect(() => {
		// getRecentPosts()
	}, [])

	return (
		<AppWrapper>
			<div className={styles.App}>
				<section className={styles.Primary}>
					<HomeHeader />
					<Overview />
				</section>

				<aside className={styles.Aside}>

				</aside>
			</div>
		</AppWrapper>
	)
}

export default App