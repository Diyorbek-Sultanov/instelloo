import { FC } from 'react'

import { TypeExplorer } from '../components/screens/explorer/explorer.types'

import Pin from './pin/Pin'

const MasonryLayout: FC<{ images: TypeExplorer[] }> = ({ images }) => {
	return (
		<div className='masonry-container'>
			{images.map(image => (
				<Pin key={image.id} image={image.image} />
			))}
		</div>
	)
}

export default MasonryLayout
