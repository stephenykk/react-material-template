type LogLevel = 'info' | 'warn' | 'error'
type Logger = {
  [key in LogLevel]: Fn<void>
}

const { DSZ_LOG_LEVEL: allowLevel = 'info', DEV: isDev } = import.meta.env

export function createLogger(prefix = 'msg') {
  const logLevels: Array<LogLevel> = ['info', 'warn', 'error']
  const colorMap = {
    info: 'skyblue',
    warn: 'orange',
    error: 'red',
  }
  const allowIndex = logLevels.findIndex((elevel) => elevel === allowLevel)
  const logger = {} as Logger

  logLevels.forEach((level) => {
    logger[level] = (...args: any[]) => {
      // 输出日志级别控制
      const index = logLevels.findIndex((elevel) => elevel === level)
      if (index < allowIndex) return

      if (
        isDev &&
        args.some(
          (arg) =>
            arg && arg.toString().toLowerCase().includes(localStorage.debugKW),
        )
      ) {
        // eslint-disable-next-line no-debugger
        debugger
      }

      console.log(
        `%c [${(level + ':' + prefix).toUpperCase()}] `,
        `color: ${colorMap[level]}`,
        ...args,
      )
    }
  })
  return logger
}
