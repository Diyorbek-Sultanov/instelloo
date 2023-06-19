import { RefObject, useEffect } from 'react'

export const useAutoSizeArea = (
	textArea: HTMLTextAreaElement | null,
	value: string
) => {
	useEffect(() => {
		if (textArea) {
			textArea.style.height = '0px'

			const textAreaScrollHeight = textArea.scrollHeight

			textArea.style.height = textAreaScrollHeight + 'px'
		}
	}, [value, textArea])
}
