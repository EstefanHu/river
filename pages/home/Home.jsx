import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import LandingWrapper from './../../wrappers/landingWrapper'

import Modal from './../../modals'

import styles from './Home.module.scss'

const Home = () => {
	const [weeklyDevotion, setWeeklyDevotion] = useState({
		hero: "",
		passage: "Romans 8:28",
		title: "Lorem ipsum dolor sit amet",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Erat nam at lectus urna duis convallis convallis tellus. Arcu risus quis varius quam quisque id diam vel quam. Scelerisque viverra mauris in aliquam sem fringilla ut. Fusce id velit ut tortor pretium viverra suspendisse. Arcu dui vivamus arcu felis bibendum ut tristique et. Dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui id ornare arcu odio ut. Volutpat lacus laoreet non curabitur gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Erat nam at lectus urna duis convallis convallis tellus. Arcu risus quis varius quam quisque id diam vel quam. Scelerisque viverra mauris in aliquam sem fringilla ut. Fusce id velit ut tortor pretium viverra suspendisse. Arcu dui vivamus arcu felis bibendum ut tristique et. Dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui id ornare arcu odio ut. Volutpat lacus laoreet non curabitur gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Erat nam at lectus urna duis convallis convallis tellus. Arcu risus quis varius quam quisque id diam vel quam. Scelerisque viverra mauris in aliquam sem fringilla ut. Fusce id velit ut tortor pretium viverra suspendisse. Arcu dui vivamus arcu felis bibendum ut tristique et. Dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui id ornare arcu odio ut. Volutpat lacus laoreet non curabitur gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Erat nam at lectus urna duis convallis convallis tellus. Arcu risus quis varius quam quisque id diam vel quam. Scelerisque viverra mauris in aliquam sem fringilla ut. Fusce id velit ut tortor pretium viverra suspendisse. Arcu dui vivamus arcu felis bibendum ut tristique et. Dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui id ornare arcu odio ut. Volutpat lacus laoreet non curabitur gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Erat nam at lectus urna duis convallis convallis tellus. Arcu risus quis varius quam quisque id diam vel quam. Scelerisque viverra mauris in aliquam sem fringilla ut. Fusce id velit ut tortor pretium viverra suspendisse. Arcu dui vivamus arcu felis bibendum ut tristique et. Dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui id ornare arcu odio ut. Volutpat lacus laoreet non curabitur gravida."
	})

	return (
		<>
			<LandingWrapper>
				<div className={styles.HeroWrapper}>
					<div className={styles.HeroDevotion}>
						<h1>"{weeklyDevotion.hero}"</h1>
						<h2>- {weeklyDevotion.passage}</h2>
					</div>
				</div>

				<div className={styles.HomeWrapper}>

					<div className={styles.Left}>

					</div>

					<div className={styles.Center}>

						<section className={styles.Weekly}>
							<h1>{weeklyDevotion.title}</h1>
							<p>{weeklyDevotion.body}</p>
						</section>

						<section className={styles.OtherWorks}>
							<span>
								<h1>poetry</h1>
								<h1>short stories</h1>
							</span>

							<span>
								<Link href="/poetry">
									<a>
										<div className={styles.OtherWorksCard}>
											<Image
												src="/imgs/poetry.jpg"
												alt="poetry"
												layout="fill"
											/>
										</div>
									</a>
								</Link>

								<Link href="/stories">
									<a>
										<div className={styles.OtherWorksCard}>
											<Image
												src="/imgs/shortstory.jpg"
												alt="short stories"
												layout="fill"
											/>
										</div>
									</a>
								</Link>
							</span>
						</section>
					</div>

					<div className={styles.Right}>

					</div>

				</div>
			</LandingWrapper>

			<Modal>
			</Modal>
		</>
	)
}

export default Home