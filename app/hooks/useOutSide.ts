import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type TypeOut = {
	ref: any
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutSide = (initialVisible: boolean): TypeOut => {
	const [isShow, setIsShow] = useState(initialVisible)
	const ref = useRef<HTMLDivElement>(null)

	const handlClick = (event: any) => {
		if (ref.current && !ref.current?.contains(event?.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handlClick, true)

		return () => document.removeEventListener('click', handlClick, true)
	})

	return { ref, isShow, setIsShow }
}
