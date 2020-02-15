import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TickPayload {
  ts: number
  light: boolean
}

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
};

const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    tick(state, action: PayloadAction<TickPayload>) {
      const { ts, light} = action.payload
      state.lastUpdate = ts
      state.light = !!light
    },
    incrementCount(state) {
      state.count += 1;
    },
    decrementCount(state) {
      state.count -= 1;
    },
    resetCount(state) {
      state.count = initialState.count
    }
  }
})

export const { tick, incrementCount, decrementCount, resetCount } = clockSlice.actions

export default clockSlice.reducer

export const serverRenderClock = (isServer) => (dispatch) => {
  dispatch(tick({
  light: !isServer,
  ts: Date.now()
}))};

export const startClock = (dispatch) => setInterval(() => {
  dispatch(tick({ light: true, ts: Date.now() }))
}, 1000);


