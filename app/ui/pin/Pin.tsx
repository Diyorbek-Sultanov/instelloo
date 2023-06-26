import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { TypePin } from './pin.types'

const Pin: FC<TypePin> = ({ image }) => {
	return (
		<div className={clsx('rounded-lg relative my-4 mx-3 cursor-pointer')}>
			<Image className='rounded-lg object-cover' src={image} alt='image' fill />
		</div>
	)
}

export default Pin
