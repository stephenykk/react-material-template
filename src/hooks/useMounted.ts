import { useEffect, useRef, useState } from 'react'

export function useMounted(callback: Fn) {
  const [isMounted, setMounted] = useState(false)
  // fix lint warning
  const cb = useRef(callback)

  useEffect(() => {
    if (isMounted) return
    setMounted(true)
    cb.current()
  }, [isMounted])
}
