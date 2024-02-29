import { useRef } from 'react'

export function useListenClickOutside(callback: Fn) {
  const divRef = useRef<HTMLDivElement>(null)

  document.body.addEventListener('click', (event) => {
    const isOut = !(
      divRef.current && divRef.current.contains(event.target as Node)
    )
    if (isOut) {
      callback?.()
    }
  })

  return divRef
}
