import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { animeList, typeSchedule } from '../../types'
import { getSchedule } from '../../api/api'

export interface AnimeState {
  schedule: Array<{ day: number; list: animeList }> | null
  animeList: animeList | null
  isLoading: boolean
  error: string | null
}

const initialState: AnimeState = {
  schedule: null,
  animeList: null,
  isLoading: false,
  error: null,
}

export const fetchAnimeList = createAsyncThunk('anime/fetchAnimeListThunk', async (_, thunkAPI) => {
  try {
    const response = await getSchedule()
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
})

export const AnimeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAnimeList.fulfilled.type]: (state, action: PayloadAction<typeSchedule>) => {
      state.isLoading = false
      state.error = null
      state.schedule = action.payload
    },
    [fetchAnimeList.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchAnimeList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {} = AnimeSlice.actions

export default AnimeSlice.reducer
