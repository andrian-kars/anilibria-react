import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { animeList, typeSchedule } from '../../types'
import { getSchedule } from '../../api/api'

export interface ScheduleState {
  schedule: Array<{ day: number; list: animeList }> | null
  isLoading: boolean
  error: string | null
}

const initialState: ScheduleState = {
  schedule: null,
  isLoading: false,
  error: null,
}

export const fetchSchedule = createAsyncThunk('schedule/fetchSchedule', async (_, thunkAPI) => {
  try {
    const response = await getSchedule()
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
})

export const ScheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSchedule.fulfilled.type]: (state, action: PayloadAction<typeSchedule>) => {
      state.isLoading = false
      state.error = null
      state.schedule = action.payload
    },
    [fetchSchedule.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchSchedule.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {} = ScheduleSlice.actions

export default ScheduleSlice.reducer
