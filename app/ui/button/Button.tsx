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
		<Button type={type} className={clsx('', className)} {...rest}>
			{children}
		</Button>
	)
}

export default Button
