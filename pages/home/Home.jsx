import React, { useState } from 'react'
import Image from 'next/image'

import LandingWrapper from './../../wrappers/landingWrapper'

import styles from './Home.module.scss'

const Home = () => {
	const [weeklyDevotion, setWeeklyDevotion] = useState({
		hero: "I sought the LORD, and He answered me and delivered me from all my fears. Those who look to Him are radiant, and their faces shall never be ashamed. Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in Him!",
		passage: "Romans 8:28",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Erat nam at lectus urna duis convallis convallis tellus. Arcu risus quis varius quam quisque id diam vel quam. Scelerisque viverra mauris in aliquam sem fringilla ut. Fusce id velit ut tortor pretium viverra suspendisse. Arcu dui vivamus arcu felis bibendum ut tristique et. Dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui id ornare arcu odio ut. Volutpat lacus laoreet non curabitur gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Erat nam at lectus urna duis convallis convallis tellus. Arcu risus quis varius quam quisque id diam vel quam. Scelerisque viverra mauris in aliquam sem fringilla ut. Fusce id velit ut tortor pretium viverra suspendisse. Arcu dui vivamus arcu felis bibendum ut tristique et. Dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui id ornare arcu odio ut. Volutpat lacus laoreet non curabitur gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Erat nam at lectus urna duis convallis convallis tellus. Arcu risus quis varius quam quisque id diam vel quam. Scelerisque viverra mauris in aliquam sem fringilla ut. Fusce id velit ut tortor pretium viverra suspendisse. Arcu dui vivamus arcu felis bibendum ut tristique et. Dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui id ornare arcu odio ut. Volutpat lacus laoreet non curabitur gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Erat nam at lectus urna duis convallis convallis tellus. Arcu risus quis varius quam quisque id diam vel quam. Scelerisque viverra mauris in aliquam sem fringilla ut. Fusce id velit ut tortor pretium viverra suspendisse. Arcu dui vivamus arcu felis bibendum ut tristique et. Dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui id ornare arcu odio ut. Volutpat lacus laoreet non curabitur gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Erat nam at lectus urna duis convallis convallis tellus. Arcu risus quis varius quam quisque id diam vel quam. Scelerisque viverra mauris in aliquam sem fringilla ut. Fusce id velit ut tortor pretium viverra suspendisse. Arcu dui vivamus arcu felis bibendum ut tristique et. Dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui id ornare arcu odio ut. Volutpat lacus laoreet non curabitur gravida."
	})

	return (
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

					<section className={styles.Scroller}>
						<p>{weeklyDevotion.body}</p>
					</section>
				</div>

				<div className={styles.Right}>

				</div>

			</div>
		</LandingWrapper>
	)
}

export default Home