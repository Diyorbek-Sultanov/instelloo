import { FC } from 'react'

import styles from './Home.module.scss'

const Follow: FC = () => {
	return (
		<div className={styles.follow}>
			<div className='flex-center-between mb-4'>
				<h3 className='font-semibold text-titleColor text-lg'>Who to follow</h3>
				<span className='block text-textXs cursor-pointer'>Refresh</span>
			</div>
		</div>
	)
}

export default Follow
