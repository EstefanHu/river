import React from 'react'

import LandingWrapperHeader from './landingWrapperHeader'
import LandingWrapperFooter from './landingWrapperFooter'

import styles from './LandingWrapper.module.scss'

const LandingWrapper = ({ children }) => {

	return (
		<div className={styles.landingWrapper}>
			<LandingWrapperHeader />

			{children}

			<LandingWrapperFooter />
		</div>
	)
}

export default LandingWrapper