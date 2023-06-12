import { FC } from 'react'

import styles from './Header.module.scss'

import Button from '@/app/ui/button/Button'

const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<Button className='btn-pink'>Upload</Button>
		</div>
	)
}

export default Menu
