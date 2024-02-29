// import { combineReducers, applyMiddleware, createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import loggerMiddleware from './middlewares/logger'

import userStore, { userOtherActions } from './modules/userStore'
import cartStore from './modules/cartStore'
import mainStore from './modules/mainStore'
import menuStore from './modules/menuStore'

// import { createLogger } from '@/utils/logger'

// const logger = createLogger('store')

const store = configureStore({
  reducer: {
    user: userStore.reducer,
    cart: cartStore.reducer,
    main: mainStore.reducer,
    menu: menuStore.reducer,
  },
  middleware(getDefaultMiddleware) {
    return [loggerMiddleware, ...getDefaultMiddleware()]
  },
})

const actionCreators = {
  ...userStore.actions,
  ...userOtherActions,
  ...cartStore.actions,
  ...mainStore.actions,
  ...menuStore.actions,
}

export type RootState = ReturnType<typeof store.getState>

const { dispatch } = store
export { userStore, cartStore, actionCreators, mainStore, store, dispatch }

export default store
