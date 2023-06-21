import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { allActions } from '../store/allActions'

import { useTypedDispatch } from './useTypedSelector'

export const useActions = () => {
	const dispatch = useTypedDispatch()

	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
