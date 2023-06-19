import { FC, PropsWithChildren } from 'react'

const Heading: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<h2 className='text-title text-titleColor mb-4 capitalize font-semibold w-fit'>
			{children}
		</h2>
	)
}

export default Heading
