'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { BsSun } from 'react-icons/bs'

import styles from './Menu.module.scss'

import UserMenu from './UserMenu'
import { useOutSide } from '@/app/hooks/useOutSide'
import { useSelectedImg } from '@/app/hooks/useSelectedImg'
import Button from '@/app/ui/button/Button'

const Menu: FC = () => {
	const { ref, isShow, setIsShow } = useOutSide(false)
	const { formData, handleChange, inputRef } = useSelectedImg()

	return (
		<div className={styles.menu}>
			<div className='bg-orange-100 p-3 rounded-full'>
				<BsSun className='cursor-pointer' fontSize={20} />
			</div>
			<Button
				className='btn-pink w-[94px] h-[40px] py-2 px-5'
				onClick={() => setIsShow(true)}
			>
				{isShow ? (
					<div
						className='w-full h-full flex-center justify-center'
						onClick={() => setIsShow(prev => !prev)}
					>
						<AiOutlineClose fontSize={25} />
					</div>
				) : (
					'Upload'
				)}
			</Button>
			<div
				className={clsx(styles.drop, {
					[styles.open]: isShow
				})}
				ref={ref}
			>
				<span className='font-medium'>Upload photo</span>
				<div className='relative w-full h-[160px] mt-3 bg-slate-200'>
					{formData.image ? (
						<Image
							src={formData.image}
							fill
							alt='img'
							className='object-contain'
						/>
					) : (
						<Image
							src={'/images/empty-picture.png'}
							fill
							alt='empty img'
							className='object-contain'
						/>
					)}
				</div>
				<p className='mt-4 text-center text-gray-600 mb-5'>
					Do you have a video wants to share us please upload her..
				</p>
				<input
					type='file'
					ref={inputRef}
					hidden
					onChange={handleChange}
					accept='image/*'
				/>
				<Button
					className='btn-pink py-1 px-3'
					onClick={() => inputRef?.current?.click()}
				>
					Choose file
				</Button>
			</div>
			<UserMenu />
		</div>
	)
}

export default Menu
