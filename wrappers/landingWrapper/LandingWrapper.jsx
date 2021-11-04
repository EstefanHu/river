import React from 'react'
import Head from 'next/head'

import LandingWrapperHeader from './landingWrapperHeader'
import LandingWrapperFooter from './landingWrapperFooter'

import styles from './LandingWrapper.module.scss'

const LandingWrapper = ({ children }) => {

	return (
		<>
			<Head>
				<title>the river</title>
			</Head>

			<div className={styles.landingWrapper}>
				<LandingWrapperHeader />

				{children}

				<LandingWrapperFooter />
			</div>
		</>
	)
}

export default LandingWrapper