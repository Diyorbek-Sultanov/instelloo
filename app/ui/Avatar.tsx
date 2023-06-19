import Image from 'next/image'
import { FC } from 'react'

import { IComAvatar } from './small-avatar/smAvatar.types'

const Avatar: FC<IComAvatar> = ({ imgUrl }) => {
	return (
		<div className='relative w-[50px] h-[50px] rounded-full'>
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
