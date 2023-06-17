'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import styles from './Sidebar.module.scss'

import { IMenuItem } from './sidebar.types'
import BootstrapIcon from '@/app/ui/BootstrapIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const pathname = usePathname()

	return (
		<li
			className={clsx(styles.li, {
				[styles.active]: pathname === item.route
			})}
		>
			<BootstrapIcon name={item.icon} />
			<Link href={item.route}>{item.label}</Link>
		</li>
	)
}

export default MenuItem
