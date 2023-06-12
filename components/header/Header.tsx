import Image from 'next/image'
import { BsSun } from 'react-icons/bs'

import styles from './Header.module.scss'

import Search from '../search/Search'

import Menu from './Menu'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='flex-center-between  w-60'>
				<Image src={'/images/logo.png'} alt='logo' width={150} height={150} />
				<BsSun className='cursor-pointer' fontSize={20} />
			</div>
			<Search />
			<Menu />
		</header>
	)
}

export default Header
