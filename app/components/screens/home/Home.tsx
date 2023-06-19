import { FC } from 'react'

import styles from './Home.module.scss'

import Post from './Post'
import Heading from '@/app/ui/Heading'

const Home: FC = () => {
	return (
		<div className={styles.home}>
			<Heading>Feed</Heading>
			<div className={styles.wrapper}>
				<Post />
				<div>fsdffsdfdsf</div>
			</div>
		</div>
	)
}

export default Home
