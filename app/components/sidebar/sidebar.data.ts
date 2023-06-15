import { ISidebarData } from './sidebar.types'

export const sidebarData: ISidebarData[] = [
	{
		icon: 'BsHouseFill',
		label: 'Home',
		route: '/'
	},
	{
		icon: 'BsFillGridFill',
		label: 'Feed',
		route: '/feed'
	},
	{
		icon: 'BsSearch',
		label: 'Explore',
		route: '/explore'
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
