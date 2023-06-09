import Image from 'next/image'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='flex-center'>
				<Image src={'/images/logo.png'} alt='logo' width={150} height={150} />
			</div>
		</header>
	)
}

export default Header
