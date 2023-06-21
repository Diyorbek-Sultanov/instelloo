import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { IComAvatar } from './small-avatar/smAvatar.types'

const Avatar: FC<IComAvatar> = ({ imgUrl, type }) => {
	return (
		<div
			className={clsx('relative  rounded-full', {
				['w-[50px] h-[50px]']: type === 'sm',
				['w-[100px] h-[50px]']: type === 'md'
			})}
		>
			<Image
				src={imgUrl}
				className='object-cover rounded-full'
				fill
				alt='avatar'
			/>
		</div>
	)
}

export default Avatar
