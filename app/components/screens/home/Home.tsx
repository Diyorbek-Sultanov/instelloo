import { FC } from 'react'

import Heading from '@/app/ui/Heading'
import Modal from '@/app/ui/modal/Modal'

import PostLoader from '@/app/loaders/PostLoader'

import styles from './Home.module.scss'

import HomeSide from './HomeSide'
import Post from './Post'

const Home: FC = () => {
	const loading = false

	return (
		<div className={styles.home}>
			<Heading>Feed</Heading>
			<div className={styles.wrapper}>
				{loading ? <PostLoader /> : <Post />}
				<HomeSide />
			</div>
			<Modal />
		</div>
	)
}

export default Home
