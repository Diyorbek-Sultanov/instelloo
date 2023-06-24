import ContentLoader from 'react-content-loader'

const PostLoader = () => (
	<ContentLoader
		speed={2}
		width={635}
		height={650}
		viewBox='0 0 635 650'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='0' y='70' rx='2' ry='2' width='578' height='340' />
		<circle cx='34' cy='31' r='27' />
		<rect x='82' y='12' rx='0' ry='0' width='178' height='35' />
		<rect x='4' y='433' rx='22' ry='22' width='194' height='35' />
		<circle cx='40' cy='520' r='35' />
		<rect x='111' y='500' rx='0' ry='0' width='139' height='14' />
		<rect x='112' y='546' rx='0' ry='0' width='221' height='14' />
		<rect x='114' y='524' rx='0' ry='0' width='154' height='12' />
	</ContentLoader>
)

export default PostLoader
