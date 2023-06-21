import { FC } from 'react'

import styles from './Home.module.scss'

import HomeSide from './HomeSide'
import Post from './Post'
import Heading from '@/app/ui/Heading'
import Modal from '@/app/ui/modal/Modal'

const Home: FC = () => {
	return (
		<div className={styles.home}>
			<Heading>Feed</Heading>
			<div className={styles.wrapper}>
				<Post />
				<HomeSide />
			</div>
			<Modal />
		</div>
	)
}

export default Home
