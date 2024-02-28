declare interface Fn<T = any> {
  (...args: Array<any>): T
}

declare interface Obj<T = any> {
  [key: string]: T
}
