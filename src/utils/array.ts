import { isDefined } from './helpers'

export function isEmptyArray<T>(array: T[]) {
  return isDefined(array) && Array.isArray(array) && array.length === 0
}

export function convertArrayToObj<T>(arr: T[]): Record<number, T> {
  if (isEmptyArray(arr)) return {}
  return arr.reduce(
    (acc, curr, idx) => {
      acc[idx] = curr
      return acc
    },
    {} as Record<number, T>
  )
}
