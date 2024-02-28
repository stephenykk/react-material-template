export function isPrimative(val: any) {
  const isObject = ['Object', 'Array'].includes(
    Object.prototype.toString.call(val).slice(8, -1),
  )
  return !isObject
}

export function camelCase(str: string) {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
}

export const isPlainObject = (val: any) => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Object'
}

export const pickData = (data: Obj, keys: Array<string>, defVal = '') => {
  return keys.reduce((result, key) => {
    result[key] = data[key] === undefined ? defVal : data[key]
    return result
  }, {} as Obj)
}

export const sleep = (seconds = 1) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}

export function setDefaults<T extends Obj>(data: T, defaultData: Obj): T {
  Object.keys(defaultData).forEach((key) => {
    const value = data[key]
    if (value == undefined) {
      // @ts-ignore
      data[key] = defaultData[key]
    }
  })

  return data
}
