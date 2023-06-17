import Image from 'next/image'

import styles from './Header.module.scss'

import Menu from './menu/Menu'
import Search from './search/Search'

const Header = () => {
	return (
		<header className={styles.header}>
			<Image
				src={'/images/logo.png'}
				alt='logo'
				priority
				width={150}
				height={150}
			/>
			<Search />
			<Menu />
		</header>
	)
}

export default Header
