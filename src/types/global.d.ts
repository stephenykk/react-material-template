declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >

  const src: string
  export default src
}

declare global {
  const clog: (...args: any[]) => any
  interface Window {
    clog: (...args: any[]) => any
  }
}

declare module '*.scss'

export {}
