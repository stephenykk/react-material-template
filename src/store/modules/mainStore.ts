import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cateTree: {},
}

const mainStore = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setCateTree(state, action) {
      state.cateTree = action.payload
    },
  },
})

export default mainStore
