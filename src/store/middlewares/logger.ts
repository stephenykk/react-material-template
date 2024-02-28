import { createLogger } from '@/utils/logger'

const logger = createLogger('store')

const loggerMiddleware =
  (store: { getState: () => any }) =>
  (next: (arg0: any) => any) =>
  (action: any) => {
    logger.info('dispatching:', action)
    const result = next(action)
    logger.info('newState:', store.getState())
    return result
  }

export default loggerMiddleware
