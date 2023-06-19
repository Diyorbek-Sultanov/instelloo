import { FC } from 'react'

import styles from './Home.module.scss'

import HomeSide from './HomeSide'
import Post from './Post'
import Heading from '@/app/ui/Heading'

const Home: FC = () => {
	return (
		<div className={styles.home}>
			<Heading>Feed</Heading>
			<div className={styles.wrapper}>
				<Post />
				<HomeSide />
			</div>
		</div>
	)
}

export default Home
