import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cateTree: {},
  hideHeader: !!localStorage.hideHeader,
  // hideHeader: true,
  showNavMenu: !!localStorage.showNavMenu,
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
