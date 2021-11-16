import React from 'react'

import styles from './HomeHeader.module.scss'

const HomeHeader = () => {

	return (
		<div className={styles.HomeHeader}>
			<h1>Home</h1>

			<button
				type="button"
				onClick={() => null}
			>update</button>
		</div>
	)
}

export default HomeHeader