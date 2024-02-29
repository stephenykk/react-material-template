import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getToken } from '@/services'

type UserInfo = {
  uid: string
  displayName?: string
  emailVerified: boolean
  email: string
  phoneNumber?: string
  isAnonymous: boolean
  photoURL?: string
  expirationTime: number
  accessToken: string
  refreshToken: string
}

const initialState = {
  token: sessionStorage.token || '',
  userName: '',
  userInfo: {} as UserInfo,
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
    setUserInfo(state, action) {
      state.userInfo = action.payload || ({} as UserInfo)
      state.userName =
        state.userInfo.displayName ||
        state.userInfo.email ||
        state.userInfo.phoneNumber ||
        ''
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
