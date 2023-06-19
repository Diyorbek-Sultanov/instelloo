import { FC } from 'react'

import styles from './Home.module.scss'

import Follow from './Follow'
import Latest from './Latest'

const HomeSide: FC = () => {
	return (
		<div className={styles.side}>
			<Follow />
			<Latest />
		</div>
	)
}

export default HomeSide
