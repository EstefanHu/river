import React from 'react'
import { useRouter } from 'next/router'

import styles from './Launch.module.scss'

const Launch = () => {
	const router = useRouter()

	return (
		<section className={styles.Launch}>
			<h1>select document type</h1>

			<span>
				<button
					type="button"
					onClick={() => window.open('/app/write/devotional')}
				>devotional</button>

				<button
					type="button"
					onClick={() => window.open('/app/write/poem')}
				>poem</button>

				<button
					type="button"
					onClick={() => window.open('/app/write/story')}
				>story</button>
			</span>
		</section>
	)
}

export default Launch