import Image from 'next/image'
import { BsSun } from 'react-icons/bs'

import styles from './Header.module.scss'

import Menu from '../menu/Menu'
import Search from '../search/Search'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='flex-center-between  w-60'>
				<Image src={'/images/logo.png'} alt='logo' width={150} height={150} />
				<div className='bg-orange-100 p-3 rounded-full'>
					<BsSun className='cursor-pointer' fontSize={20} />
				</div>
			</div>
			<Search />
			<Menu />
		</header>
	)
}

export default Header
