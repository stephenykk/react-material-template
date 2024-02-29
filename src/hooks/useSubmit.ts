import { useRef, useState } from 'react'

// add loading effect to submit button
export function useSubmit() {
  const [loading, setLoading] = useState(false)
  const [handlerCache] = useState(new WeakMap())

  const submitCbRef = useRef<Fn>()
  if (!submitCbRef.current) {
    submitCbRef.current = function submitCb(handler: Fn) {
      const cachedWrapped = handlerCache.get(handler)
      if (cachedWrapped) return cachedWrapped

      const wrapped = async function (...args: any[]) {
        setLoading(true)
        // at least loading for a while
        await Promise.allSettled([
          await handler(...args),
          new Promise((resolve) => setTimeout(resolve, 1500, true)),
        ])
        setLoading(false)
      }

      handlerCache.set(handler, wrapped)

      return wrapped
    }
  }

  return { loading, submitCallback: submitCbRef.current }
}
