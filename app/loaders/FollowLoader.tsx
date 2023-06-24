import ContentLoader from 'react-content-loader'

const FollowLoader = () => (
	<ContentLoader
		speed={2}
		width={340}
		height={230}
		viewBox='0 0 340 230'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<circle cx='24' cy='24' r='16' />
		<circle cx='25' cy='64' r='16' />
		<circle cx='25' cy='103' r='16' />
		<rect x='53' y='17' rx='0' ry='0' width='121' height='18' />
		<rect x='52' y='60' rx='0' ry='0' width='121' height='18' />
		<rect x='53' y='96' rx='0' ry='0' width='121' height='18' />
	</ContentLoader>
)

export default FollowLoader
