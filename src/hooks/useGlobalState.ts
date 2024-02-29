import { useSelector } from 'react-redux'
import type { RootState } from '@/store'

type ModuleName = 'main' | 'user' | 'cart'

export function useGlobalState<T extends ModuleName>(
  moduleName: T,
): RootState[T]
export function useGlobalState<
  T extends ModuleName,
  U extends keyof RootState[T],
>(moduleName: T, key: U): RootState[T][U]
export function useGlobalState<
  T extends ModuleName,
  U extends keyof RootState[T],
>(moduleName: T, key?: U): unknown {
  const curState = useSelector<RootState, RootState[T]>(
    (state) => state[moduleName],
  )
  if (typeof key === 'undefined') {
    return curState
  } else {
    return curState[key]
  }
}
