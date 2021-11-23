import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { scheduleReducer, layoutsReducer, initialReducer } from './reducers'

const rootReducer = combineReducers({
  scheduleReducer,
  layoutsReducer,
  initialReducer,
})

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
