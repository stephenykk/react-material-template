import { useState } from 'react'

export function useFocus() {
  const [focus, setFocus] = useState(false)
  const onFocus = function () {
    setFocus(true)
  }
  const onBlur = function () {
    setFocus(false)
  }

  return { onFocus, onBlur, focus }
}
