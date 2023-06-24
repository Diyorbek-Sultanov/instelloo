import ContentLoader from 'react-content-loader'

const LatestLoader = () => (
	<ContentLoader
		speed={2}
		width={365}
		height={470}
		viewBox='0 0 385 470'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='8' y='6' rx='10' ry='10' width='165' height='144' />
		<rect x='188' y='4' rx='10' ry='10' width='165' height='144' />
		<rect x='10' y='160' rx='10' ry='10' width='165' height='144' />
		<rect x='187' y='159' rx='10' ry='10' width='165' height='144' />
	</ContentLoader>
)

export default LatestLoader
