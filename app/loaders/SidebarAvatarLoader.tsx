import ContentLoader from 'react-content-loader'

const SidebarAvatarLoader = () => {
	return (
		<ContentLoader
			speed={2}
			width={266}
			height={240}
			viewBox='0 0 266 240'
			backgroundColor='#f3f3f3'
			foregroundColor='#d4d3d3'
		>
			<circle cx='99' cy='51' r='50' />
			<rect x='12' y='116' rx='0' ry='0' width='197' height='21' />
			<rect x='8' y='158' rx='0' ry='0' width='206' height='63' />
		</ContentLoader>
	)
}

export default SidebarAvatarLoader
