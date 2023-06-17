import { FC } from 'react'

import styles from './Sidebar.module.scss'

import MenuItem from './MenuItem'
import { sidebarData } from './sidebar.data'

const SidebarMenu: FC = () => {
	return (
		<ul className={styles.menu}>
			{sidebarData.map(item => (
				<MenuItem item={item} key={item.label} />
			))}
		</ul>
	)
}

export default SidebarMenu
