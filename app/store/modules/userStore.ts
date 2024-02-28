import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getToken } from '@/services'

const initialState = {
  token: sessionStorage.token || '',
  userName: 'tester',
}

const getTokenAction = createAsyncThunk(
  'getToken',
  async (value: { email: string; password: string }) => {
    const res = await getToken(value.email, value.password)
    return res
  },
)

const userStore = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload
    },
    setToken(state, action) {
      state.token = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(getTokenAction.fulfilled, (state, action) => {
      state.token = action.payload?.token
    })
  },
})

const userOtherActions = {
  getToken: getTokenAction,
}

export { userOtherActions }

export default userStore
