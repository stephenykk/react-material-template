import { bindActionCreators } from '@reduxjs/toolkit'
import store, { actionCreators } from '@/store'
import { useRef } from 'react'

export function useActions() {
  const { dispatch } = store
  const actions = bindActionCreators(actionCreators, dispatch)
  const actionsRef = useRef<typeof actions>() // 获得推导的类型

  // actionsRef.current?.setToken

  if (actionsRef.current) return actionsRef.current
  actionsRef.current = actions

  return actionsRef.current
}
