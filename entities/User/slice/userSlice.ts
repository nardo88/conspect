import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_TOKEN_KEY } from '@shared/consts/localStorage'
import { SessionSchema } from '../types'
import { getSession } from '../services/getSession'

const initialState: SessionSchema = {
  isAuth: false,
  userData: null,
  isReady: true,
  isLoad: false,
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem(USER_TOKEN_KEY)
      state.userData = null
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getSession.pending, (state) => {
        state.isLoad = true
      })
      .addCase(getSession.fulfilled, (state, action) => {
        state.userData = action.payload
        state.isLoad = false
        state.isReady = true
      })
      .addCase(getSession.rejected, (state) => {
        state.isLoad = false
        state.isReady = true
      })
  },
})

export const { actions: sessionAction } = sessionSlice
export const { reducer: sessionReducer } = sessionSlice
