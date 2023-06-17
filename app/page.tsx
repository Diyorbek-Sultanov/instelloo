import type { Metadata } from 'next'

import Home from './components/screens/home/Home'

export const metadata: Metadata = {
	title: 'Home | Instelloo',
	description: 'This is home page in Instelloo web app'
}

export default function Page() {
	return <Home />
}
