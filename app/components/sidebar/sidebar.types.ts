import { TypeIcons } from '@/app/shared/icons.types'

export interface ISidebarData {
	label: string
	route: string
	icon: TypeIcons
}

export interface IMenuItem extends ISidebarData {}
