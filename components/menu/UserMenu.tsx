import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { BiUser } from 'react-icons/bi'

import styles from './Menu.module.scss'

import { userMenuData } from './user-menu-data'
import { useOutSide } from '@/app/hooks/useOutSide'
import BootstrapIcon from '@/app/ui/BootstrapIcon'

const UserMenu: FC = () => {
	const { ref, isShow, setIsShow } = useOutSide(false)

	return (
		<div className={styles.user} onClick={() => setIsShow(true)}>
			<BiUser fontSize={22} />

			<div
				className={clsx(styles.userMenu, {
					[styles.open]: isShow
				})}
				ref={ref}
			>
				<ul>
					{userMenuData.map(menu => (
						<li key={menu.label}>
							<BootstrapIcon name={menu.icon} />
							<Link href={menu.route}>{menu.label}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default UserMenu
