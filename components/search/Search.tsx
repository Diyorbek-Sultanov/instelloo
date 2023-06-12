import { FC } from 'react'
import { CiSearch } from 'react-icons/ci'

import styles from './Search.module.scss'

import Input from '@/app/ui/input/Input'

const Search: FC = () => {
	return (
		<div className={styles.search}>
			<Input placeholder='Search' />
			<CiSearch className={styles.searchIcon} fontSize={20} />
		</div>
	)
}

export default Search
