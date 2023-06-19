import { FC } from 'react'

import Avatar from '@/app/ui/Avatar'

const CommentItem: FC = () => {
	return (
		<div className=' flex gap-x-5 mb-7'>
			<Avatar imgUrl={'/images/avatar.jpg'} />
			<p className='max-w-[420px]'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic minus
				debitis amet.
			</p>
		</div>
	)
}

export default CommentItem
