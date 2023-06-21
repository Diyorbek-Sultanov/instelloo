'use client'

import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import store from '../store/store'

const RootProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default RootProvider
