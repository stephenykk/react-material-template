import { createSlice } from '@reduxjs/toolkit'

type Goods = { id: string; price: number; name: string }

const initialState = {
  goodsList: [] as Array<Goods>,
}

const cartStore = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addGoods(state, action) {
      state.goodsList.push(action.payload)
    },
    delGoods(state, action) {
      state.goodsList = state.goodsList.filter((el) => el.id === action.payload)
    },
  },
})

export default cartStore
