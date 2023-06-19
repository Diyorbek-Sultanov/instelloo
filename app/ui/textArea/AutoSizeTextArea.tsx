'use client'

import { FC, useRef, useState } from 'react'

import styles from './AutoSizeTextArea.module.scss'

import Button from '../button/Button'

import { useAutoSizeArea } from '@/app/hooks/useAutoSizeArea'

const AutoSizeTextArea: FC = () => {
	const [value, setValue] = useState<string>('')
	const textArea = useRef<HTMLTextAreaElement>(null)

	useAutoSizeArea(textArea.current, value)

	return (
		<form className={styles.form}>
			<textarea
				className={styles.textarea}
				rows={1}
				placeholder='Add to comment'
				value={value}
				onChange={e => setValue(e.target.value)}
				ref={textArea}
			/>
			<Button className={styles.btn} type='submit'>
				Send
			</Button>
		</form>
	)
}

export default AutoSizeTextArea
