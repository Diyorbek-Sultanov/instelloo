import SidebarAvatarLoader from '@/app/loaders/SidebarAvatarLoader'

import styles from './Sidebar.module.scss'

import Avatar from './Avatar'
import SidebarMenu from './SidebarMenu'

const Sidebar = () => {
	const loading = false

	return (
		<aside className={styles.sidebar}>
			{loading ? <SidebarAvatarLoader /> : <Avatar />}
			<SidebarMenu />
		</aside>
	)
}

export default Sidebar
