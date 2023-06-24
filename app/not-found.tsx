'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { BiArrowBack } from 'react-icons/bi'

import Button from './ui/button/Button'

const page: FC = () => {
	const { back, push } = useRouter()

	return (
		<div className='flex-center justify-center pt-28'>
			<div className='w-[590px] mx-auto flex flex-col gap-y-3 text-center'>
				<h2 className='text-3xl font-semibold'>Page not found</h2>
				<p>
					The page you are looking for doesn't exist. <br /> Here you are some
					helpful links:
				</p>
				<div className='flex-center justify-center gap-x-3'>
					<Button
						className='border text-base text-gray-600 flex-center gap-x-2 py-2 px-4 rounded-md not-found-btn transition-transform duration-300 ease-in'
						onClick={() => back()}
					>
						<BiArrowBack />
						Go back
					</Button>
					<Button
						className='border border-purple-500 bg-purple-500 text-white text-base py-2 px-4 rounded-md hover:bg-transparent hover:text-black transition-colors duration-300 ease-in-out'
						onClick={() => push('/')}
					>
						Take me Home
					</Button>
				</div>
			</div>
		</div>
	)
}

export default page
