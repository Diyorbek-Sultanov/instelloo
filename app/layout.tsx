import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import RootProvider from './providers/RootProvider'
import './styles/globals.scss'
import Header from '@/app/components/layout/header/Header'
import Sidebar from '@/app/components/layout/sidebar/Sidebar'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	style: 'normal'
})

export const metadata: Metadata = {
	metadataBase: new URL(process.env.SITE_URL as string),
	title: 'Instelloo',
	description: 'Generated by create next app',
	applicationName: 'Instelloo',
	authors: [{ name: 'DevBoys group' }],
	category: 'Social',
	keywords: ['social', 'instagram clone', 'nextjs'],
	openGraph: {
		type: 'website',
		title: 'Instelloo',
		description: 'this is instagram clone name instelloo',
		siteName: 'Instelloo',
		url: process.env.SITE_URL
	},
	viewport: { width: 'device-width', initialScale: 1 }
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<RootProvider>
					<div className='h-screen overflow-hidden'>
						<Header />
						<div className='flex'>
							<Sidebar />
							<main className='main h-full'>
								<section className='h-full max-w-[1310px] mx-auto pt-7'>
									{children}
								</section>
							</main>
						</div>
					</div>
				</RootProvider>
			</body>
		</html>
	)
}
