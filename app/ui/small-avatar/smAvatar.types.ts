export type TypeSmAvatar = {
	imgUrl: string
	name: string
}

export interface IComAvatar extends Omit<TypeSmAvatar, 'name'> {}
