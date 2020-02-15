import { configureStore, Action, combineReducers } from "@reduxjs/toolkit";
import { ThunkAction } from 'redux-thunk'
import clockReducer from './features/clockSlice'

const exampleInitialState = {
  clock: {
    lastUpdate: 0,
    light: false,
    count: 0,
  }
};

const rootReducer = combineReducers({
  clock: clockReducer
})

export function initializeStore(initialState = exampleInitialState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState
  })
}

export type RootState = ReturnType<typeof initializeStore>

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
