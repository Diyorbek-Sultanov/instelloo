import Image from 'next/image'
import { FC } from 'react'

import { IFollowItem } from './home.type'
import Button from '@/app/ui/button/Button'

const FollowItem: FC<{ item: IFollowItem }> = ({ item }) => {
	return (
		<div className='flex-center-between'>
			<div className='flex-center gap-x-3'>
				<div className='relative rounded-full w-[40px] h-[40px]'>
					<Image
						src={item.imgUrl}
						fill
						priority
						alt='avatar'
						className='object-cover rounded-full'
					/>
				</div>
				<h4 className='text-xs font-semibold text-titleColor'>{item.name}</h4>
			</div>
			<Button className='text-xs rounded-3xl py-1 px-3 border-2 hover:border-purple-500 transition-colors font-semibold'>
				Follow
			</Button>
		</div>
	)
}

export default FollowItem
