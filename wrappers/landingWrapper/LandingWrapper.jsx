import React, { useEffect } from 'react'
import Head from 'next/head'
import { useGlobalState } from '../../state'

import LandingWrapperHeader from './landingWrapperHeader'
import LandingWrapperFooter from './landingWrapperFooter'

import styles from './LandingWrapper.module.scss'

const LandingWrapper = ({ children }) => {
	const { addAuthErrorMessage } = useGlobalState()

	useEffect(() => {
		console.log('Testing')
		addAuthErrorMessage('Testing')
	}, [])

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