import { combineReducers } from '@reduxjs/toolkit'

import { modalReducer } from '../slices/modal/modal.slice'

export const rootReducer = combineReducers({
	modal: modalReducer
})
