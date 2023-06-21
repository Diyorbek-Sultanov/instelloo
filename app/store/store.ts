import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './reducers/rootReducer'

const store = configureStore({
	reducer: rootReducer
})

export type RooState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
