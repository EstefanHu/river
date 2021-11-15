import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStateValue } from '../../../state'
import Link from 'next/link'

import styles from './LandingWrapperHeader.module.scss'

const LandingWrapperHeader = () => {
	const [isMobile, setIsMobile] = useState(false)
	const [isAuthed, setIsAuthed] = useState(false)

	const router = useRouter()

	useEffect(() => {
		setIsMobile(false)
	}, [])

	return (
		<nav className={styles.LandingWrapperHeader}>
			<Link href="/">
				<a>
					<h1 className={styles.Logo}><span>the</span>River</h1>
				</a>
			</Link>

			<span className={styles.LinksWrapper}>
				{isMobile
					? <></>
					: <ul className={styles.Links}>
						<li><Link href="/devotions"><a>devotions</a></Link></li>
						<li><Link href="/poetry"><a>poetry</a></Link></li>
						<li><Link href="/stories"><a>stories</a></Link></li>
						<li><Link href="/biography"><a>biography</a></Link></li>
					</ul>
				}

				{isAuthed
					? <button
						type="button"
						className={styles.AuthOptions}
						onClick={() => null}
					>

					</button>
					: <button
						type="button"
						className={styles.AuthButton}
						onClick={() => router.push('/auth')}
					>sign in</button>
				}
			</span>
		</nav>
	)
}

export default LandingWrapperHeader