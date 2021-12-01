import React from 'react'

import AppWrapper from './../../../wrappers/appWrapper'
import {
	Drafts,
	Launch
} from './../../../appComponents/write'

import styles from './Write.module.scss'

const Write = () => {
	return (
		<AppWrapper>
			<div className={styles.Write}>
				<h1>write</h1>
				<Launch />

				<Drafts />
			</div>
		</AppWrapper>
	)
}

export default Write