import { FC } from 'react'

import Heading from '@/app/ui/Heading'
import MasonryLayout from '@/app/ui/MasonryLayout'

import styles from './Explorer.module.scss'

import { explorerData } from './explorer.data'

const Explorer: FC = () => {
	return (
		<div className={styles.explorer}>
			<Heading>Explorer</Heading>
			<MasonryLayout images={explorerData} />
		</div>
	)
}

export default Explorer
