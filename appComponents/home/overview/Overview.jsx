import React from 'react'

import styles from './Overview.module.scss'

const Overview = () => {

	return (
		<div className={styles.Overview}>
			<div className={styles.Devotions}>
				<h1>Devotions</h1>
			</div>

			<div className={styles.Poetry}>
				<h1>poetry</h1>
			</div>

			<div className={styles.Stories}>
				<h1>Stories</h1>
			</div>
		</div>
	)
}

export default Overview