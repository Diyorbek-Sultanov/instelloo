import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { TypeModalState } from './modal.types'

const initialState: TypeModalState = {
	type: 'hide',
	imgUrl: ''
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		showModal: (state, action: PayloadAction<TypeModalState>) => {
			state.type = action.payload.type
			state.imgUrl = action.payload.imgUrl
		},
		hideModal: (state, action: PayloadAction<TypeModalState>) => {
			state.type = action.payload.type
		}
	}
})

export const modalReducer = modalSlice.reducer
export const modalAcitons = modalSlice.actions

export default modalSlice
