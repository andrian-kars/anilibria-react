import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAnimeListForSide } from '../../api/layoutsApi'
import { animeList } from '../../types'

export interface LayoutState {
  animeListForSide: animeList | null
  isLoading: boolean
  error: string | null
}

const initialState: LayoutState = {
  animeListForSide: null,
  isLoading: false,
  error: null,
}

export const fetchAnimeListForSide = createAsyncThunk(
  'layout/fetchAnimeListForSide',
  async (_, thunkAPI) => {
    try {
      const response = await getAnimeListForSide()
      console.log(response.data)

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const LayoutsSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAnimeListForSide.fulfilled.type]: (state, action: PayloadAction<animeList>) => {
      state.isLoading = false
      state.error = null
      state.animeListForSide = action.payload
    },
    [fetchAnimeListForSide.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchAnimeListForSide.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {} = LayoutsSlice.actions

export default LayoutsSlice.reducer
