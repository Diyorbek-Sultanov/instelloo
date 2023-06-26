import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { ESizes } from '@/app/components/screens/explorer/explorer.types'

import { TypePin } from './pin.types'

const Pin: FC<TypePin> = ({ image, sizes }) => {
	return (
		<div
			className={clsx('rounded-lg relative my-4 mx-3 cursor-pointer', {
				['small']: sizes === ESizes.SMALL,
				['medium']: sizes === ESizes.MEDIUM,
				['large']: sizes === ESizes.LARGE
			})}
		>
			<Image className='rounded-lg object-cover' src={image} alt='image' fill />
		</div>
	)
}

export default Pin
