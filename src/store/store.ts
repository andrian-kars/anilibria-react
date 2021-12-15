import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  scheduleReducer,
  layoutsReducer,
  initialReducer,
  catalogReducer,
  releaseReducer,
} from './reducers'

const rootReducer = combineReducers({
  scheduleReducer,
  layoutsReducer,
  initialReducer,
  catalogReducer,
  releaseReducer,
})

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
