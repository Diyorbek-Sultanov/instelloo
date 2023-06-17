import styles from './Sidebar.module.scss'

import Avatar from './Avatar'
import SidebarMenu from './SidebarMenu'

const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<Avatar />
			<SidebarMenu />
		</aside>
	)
}

export default Sidebar
