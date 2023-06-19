import { FC } from 'react'

import styles from './Home.module.scss'

import CommentItem from './CommentItem'
import AutoSizeTextArea from '@/app/ui/textArea/AutoSizeTextArea'

const Comments: FC = () => {
	return (
		<div className={styles.comments}>
			<CommentItem />
			<CommentItem />
			<AutoSizeTextArea />
		</div>
	)
}

export default Comments
