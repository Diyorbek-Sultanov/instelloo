import Image from 'next/image'
import { FC } from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import { BsFillShareFill, BsThreeDots } from 'react-icons/bs'
import { MdSms } from 'react-icons/md'

import styles from './Home.module.scss'

import Comments from './Comments'
import SmAvatar from '@/app/ui/small-avatar/SmAvatar'

const Post: FC = () => {
	return (
		<div className={styles.post}>
			<div className='p-4 flex-center-between'>
				<SmAvatar imgUrl='/images/avatar.jpg' name='Diyorbek Sultanov' />
				<div className={styles.action}>
					<div className={styles.dot}>
						<BsThreeDots className='cursor-pointer' fontSize={22} />
					</div>
				</div>
			</div>
			<div className='relative w-full h-[340px] mb-8'>
				<Image
					src={'/images/post-img.jpg'}
					fill
					alt='post img'
					className='object-cover'
				/>
			</div>
			<div className='px-5'>
				<div className='flex-center-between mb-7'>
					<div className='flex-center gap-3'>
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
							<span className='font-semibold text-base capitalize'>
								Comment
							</span>
							<p>43</p>
						</div>
					</div>
					<div className='flex-center gap-x-3 cursor-pointer'>
						<BsFillShareFill fontSize={22} className='cursor-pointer' />
						<span className='font-semibold text-base capitalize'>share</span>
					</div>
				</div>
				<Comments />
			</div>
		</div>
	)
}

export default Post
