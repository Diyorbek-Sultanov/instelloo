'use client'

import Image from 'next/image'
import { FC, useCallback } from 'react'

import { useActions } from '@/app/hooks/useActions'

import LatestLoader from '@/app/loaders/LatestLoader'

import styles from './Home.module.scss'

import { latestData } from './home.data'

const Latest: FC = () => {
	const { showModal } = useActions()
	const loading = false

	const handlClick = useCallback(
		(imgUrl: string) => {
			showModal({ type: 'show', imgUrl })
			document.body.style.overflow = 'hidden'
		},
		[showModal]
	)

	return (
		<div className={styles.latest}>
			<div className='flex-center-between mb-4'>
				<h3 className='font-semibold text-titleColor text-lg'>Latest</h3>
				<span className='block text-textXs cursor-pointer'>See all</span>
			</div>
			<div className='grid grid-cols-2 gap-2'>
				{loading ? (
					<LatestLoader />
				) : (
					latestData.map(item => (
						<div
							className='max-w-full rounded-lg relative h-36 overflow-hidden cursor-pointer'
							key={item.id}
							onClick={() => handlClick(item.imgUrl)}
						>
							<Image
								className='object-cover rounded-lg'
								src={item.imgUrl}
								fill
								alt='latest-img'
							/>
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default Latest
