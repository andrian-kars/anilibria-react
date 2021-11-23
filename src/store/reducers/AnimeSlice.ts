import { AppDispatch } from './../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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

export const AnimeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setSchedule: (state, action: PayloadAction<typeSchedule>) => {
      state.schedule = action.payload
    },
    startFetching: (state) => {
      state.isLoading = true
    },
    stopFetching: (state) => {
      state.isLoading = false
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const { setSchedule, startFetching, stopFetching, setError } = AnimeSlice.actions

export const fetchAnimeList = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(startFetching())
    const response = await getSchedule()
    dispatch(setSchedule(response.data))
    dispatch(stopFetching())
  } catch (e) {
    dispatch(setError(e.message))
    dispatch(stopFetching())
  }
}

export default AnimeSlice.reducer
