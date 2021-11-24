import React from 'react'

import WriteWrapper from './../../../wrappers/writeWrapper'
import {
	Drafts,
	Launch
} from './../../../appComponents/write'

import styles from './Write.module.scss'

const Write = () => {
	return (
		<WriteWrapper>
			<div className={styles.Write}>
				<h1>write</h1>
				<Launch />

				<Drafts />
			</div>
		</WriteWrapper>
	)
}

export default Write