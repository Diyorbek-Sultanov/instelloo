import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Input.module.scss'

import { IField } from './input.types'

const Input = forwardRef<HTMLInputElement, IField>(
	({ type = 'text', placeholder, error, className, ...rest }, ref) => {
		return (
			<div className='relative'>
				<input
					className={clsx(styles.input, className)}
					type={type}
					placeholder={placeholder}
					ref={ref}
					{...rest}
				/>
				{error && <div>{error.message}</div>}
			</div>
		)
	}
)

export default Input
