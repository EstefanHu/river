import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import styles from './LandingWrapperHeader.module.scss'

const isBrowser = typeof window !== `undefined`

const getScrollPosition = ({ element, useWindow }) => {
	if (!isBrowser) return { x: 0, y: 0 }

	const target = element ? element.current : document.body
	const position = target.getBoundingClientRect()

	return useWindow
		? { x: window.scrollX, y: window.scrollY }
		: { x: position.left, y: position.top }
}

const LandingWrapperHeader = () => {
	const [isMobile, setIsMobile] = useState(false)
	const [isAuthed, setIsAuthed] = useState(false)

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
					? <></>
					: <button
						type="button"
						className={styles.AuthButton}
						onClick={() => null}
					>sign in</button>
				}
			</span>
		</nav>
	)
}

export default LandingWrapperHeader