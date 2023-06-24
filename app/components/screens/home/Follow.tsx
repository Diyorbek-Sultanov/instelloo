import { FC } from 'react'

import FollowLoader from '@/app/loaders/FollowLoader'

import styles from './Home.module.scss'

import FollowItem from './FollowItem'
import { followData } from './home.data'

const Follow: FC = () => {
	const loading = false

	return (
		<div className={styles.follow}>
			<div className='flex-center-between mb-4'>
				<h3 className='font-semibold text-titleColor text-lg'>Who to follow</h3>
				<span className='block text-textXs cursor-pointer'>Refresh</span>
			</div>
			<div className='flex flex-col gap-y-5'>
				{loading ? (
					<FollowLoader />
				) : (
					followData.map(item => <FollowItem key={item.id} item={item} />)
				)}
			</div>
		</div>
	)
}

export default Follow
