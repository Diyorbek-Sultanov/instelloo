import { ISidebarData } from './sidebar.types'

export const sidebarData: ISidebarData[] = [
	{
		icon: 'BsFillGridFill',
		label: 'Feed',
		route: '/'
	},
	{
		icon: 'BsSearch',
		label: 'Explore',
		route: '/explorer'
	},
	{
		icon: 'BsFillChatRightTextFill',
		label: 'Messages',
		route: '/messages'
	},
	{
		icon: 'BsFillGearFill',
		label: 'Settings',
		route: '/settings'
	},
	{
		icon: 'BsFillPersonFill',
		label: 'My profile',
		route: '/my-profile'
	}
]
