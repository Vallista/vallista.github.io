declare module 'just-throttle' {
  declare type Option = {
    leading?: boolean
    trailing?: boolean
  }

  type Methods = {
    cancel: () => void
    flush: () => void
  }

  declare function throttle<T extends Function>(
    fn: T,
    interval: number,
    options?: Option
  ): T & Methods

  export = throttle
}
