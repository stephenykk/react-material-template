// import { combineReducers, applyMiddleware, createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import loggerMiddleware from './middlewares/logger'

import userStore, { userOtherActions } from './modules/userStore'
import cartStore from './modules/cartStore'
import mainStore from './modules/mainStore'

const store = configureStore({
  reducer: {
    user: userStore.reducer,
    cart: cartStore.reducer,
    main: mainStore.reducer,
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
}

export type RootState = ReturnType<typeof store.getState>

export { userStore, cartStore, actionCreators, mainStore }

export default store
