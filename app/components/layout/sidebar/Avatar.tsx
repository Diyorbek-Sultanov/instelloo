import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Sidebar.module.scss'

const Avatar: FC = () => {
	return (
		<div className={styles.avatar}>
			<div className={styles.img}>
				<Image
					src={'/images/avatar.jpg'}
					fill
					alt='avatar'
					className='object-cover rounded-full'
				/>
			</div>
			<Link href={''} className={styles.name}>
				Diyorbek Sultanov
			</Link>
			<div className={styles.info}>
				<div>
					<span className='font-semibold text-Xs text-titleColor'>Posts</span>
					<span className='text-Xs mt-2 font-medium'>13</span>
				</div>
				<div>
					<span className='font-semibold text-Xs text-titleColor'>
						Following
					</span>
					<span className='text-Xs mt-2 font-medium'>1200</span>
				</div>
				<div>
					<span className='font-semibold text-Xs text-titleColor'>
						Followers
					</span>
					<span className='text-Xs mt-2 font-medium'>3000</span>
				</div>
			</div>
		</div>
	)
}

export default Avatar
