import type { Metadata } from 'next'

import Explorer from '../components/screens/explorer/Explorer'

export const metadata: Metadata = {
	title: 'Explorer',
	description: 'this is explorer page'
}

export default function Page() {
	return <Explorer />
}
