'use client'

import Image from 'next/image'
import { FC, useCallback } from 'react'

import styles from './Home.module.scss'

import { latestData } from './home.data'
import { useActions } from '@/app/hooks/useActions'

const Latest: FC = () => {
	const { showModal } = useActions()

	const handlClick = useCallback(() => {
		showModal({ type: 'show' })
		document.body.style.overflow = 'hidden'
	}, [])

	return (
		<div className={styles.latest}>
			<div className='flex-center-between mb-4'>
				<h3 className='font-semibold text-titleColor text-lg'>Latest</h3>
				<span className='block text-textXs cursor-pointer'>See all</span>
			</div>
			<div className='grid grid-cols-2 gap-2'>
				{latestData.map(item => (
					<div
						className='max-w-full rounded-lg relative h-36 overflow-hidden cursor-pointer'
						key={item.id}
						onClick={handlClick}
					>
						<Image
							className='object-cover rounded-lg'
							src={item.imgUrl}
							priority
							fill
							alt='latest-img'
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Latest
