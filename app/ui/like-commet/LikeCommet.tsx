import clsx from 'clsx'
import { FC } from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import { MdSms } from 'react-icons/md'

import styles from './LikeCommet.module.scss'

import { TypeLikeComment } from './likeComment.types'

const LikeCommet: FC<TypeLikeComment> = ({ modal }) => {
	return (
		<div
			className={clsx('flex-center gap-3', {
				'justify-between border-b pb-5 mb-6': modal
			})}
		>
			<div className={styles.likeWrap}>
				<div className={styles.likeItem}>
					<BiLike fontSize={22} />
					<span className='font-semibold'>300</span>
				</div>
				<div className={styles.likeItem}>
					<BiDislike fontSize={22} />
					<span className='font-semibold'>3</span>
				</div>
			</div>
			<div className={styles.comment}>
				<MdSms fontSize={22} className='cursor-pointer' />
				<span className='font-semibold text-base capitalize'>Comment</span>
			</div>
		</div>
	)
}

export default LikeCommet
