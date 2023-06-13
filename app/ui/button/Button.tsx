import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import { IButton } from './button.types'

const Button: FC<PropsWithChildren<IButton>> = ({
	type = 'button',
	className,
	children,
	...rest
}) => {
	return (
		<button type={type} className={clsx('', className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
