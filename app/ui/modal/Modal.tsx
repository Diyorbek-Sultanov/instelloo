'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

import styles from './Modal.module.scss'

import Avatar from '../Avatar'
import LikeCommet from '../like-commet/LikeCommet'
import SmAvatar from '../small-avatar/SmAvatar'
import AutoSizeTextArea from '../textArea/AutoSizeTextArea'

import { useActions } from '@/app/hooks/useActions'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'

const Modal: FC = () => {
	const { hideModal } = useActions()
	const { type, imgUrl } = useTypedSelector(state => state.modal)

	return (
		<div
			className={clsx(styles.modal, {
				[styles.open]: type === 'show'
			})}
		>
			<div className={styles.overlay}>
				<div className={styles.content}>
					<div
						className={styles.close}
						onClick={() => hideModal({ type: 'hide' })}
					>
						<AiOutlineClose fontSize={23} />
					</div>
					<div className='relative w-[65%] min-h-[700px] overflow-hidden'>
						<Image
							src={imgUrl ? imgUrl : ''}
							fill
							alt='img'
							className='object-cover'
						/>
					</div>
					<div className={styles.right}>
						<div className='flex-center-between w-full mb-5 border-b pb-3'>
							<SmAvatar
								imgUrl={'/images/avatar.jpg'}
								name={'Diyobek Sultanov'}
							/>
							<div className={styles.action}>
								<div className={styles.dot}>
									<BsThreeDots className='cursor-pointer' fontSize={22} />
								</div>
							</div>
						</div>
						<LikeCommet modal />
						<div className={styles.comments}>
							<div>
								<div className=' flex gap-x-5 mb-7'>
									<Avatar imgUrl={'/images/avatar.jpg'} type={'md'} />
									<p className='max-w-[420px]'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Hic minus debitis amet.
									</p>
								</div>
							</div>
						</div>
						<AutoSizeTextArea />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
