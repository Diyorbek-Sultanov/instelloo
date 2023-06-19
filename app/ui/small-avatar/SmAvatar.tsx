import Image from 'next/image'
import { FC } from 'react'

import { TypeSmAvatar } from './smAvatar.types'

const SmAvatar: FC<TypeSmAvatar> = ({ imgUrl, name }) => {
	return (
		<div className='flex-center gap-4'>
			<div className='relative w-[40px] h-[40px] rounded-full border-2 border-pink'>
				<Image
					className='object-contain rounded-full'
					src={imgUrl}
					fill
					alt='avatar'
					priority
				/>
			</div>
			<h6 className='font-semibold text-titleColor text-sm'>{name}</h6>
		</div>
	)
}

export default SmAvatar
