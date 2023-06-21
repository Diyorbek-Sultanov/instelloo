import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, RooState } from '../store/store'

export const useTypedSelector: TypedUseSelectorHook<RooState> = useSelector
export const useTypedDispatch: () => AppDispatch = useDispatch
