import { ChangeEvent, RefObject, useEffect, useRef, useState } from 'react'

interface ISelectedImg {
	inputRef: RefObject<HTMLInputElement> | null
	formData: {
		image: string
	}
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const useSelectedImg = (): ISelectedImg => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [selectedImg, SetSelectedImg] = useState<Blob>()
	const [formData, setFormData] = useState({
		image: ''
	})

	useEffect(() => {
		if (!selectedImg) {
			setFormData({ ...formData, image: '' })
			return
		}

		const imageUrl = URL.createObjectURL(selectedImg)

		setFormData({ ...formData, image: imageUrl })

		return () => URL.revokeObjectURL(imageUrl)
	}, [selectedImg])

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target

		const selectedFiles = files as FileList

		SetSelectedImg(selectedFiles?.[0])
	}

	return { inputRef, formData, handleChange }
}
