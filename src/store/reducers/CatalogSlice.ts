import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getNewAnimeListForCatalog } from '../../api/catalogApi'
import { animeList } from '../../types'

export interface CatalogState {
  animeListForCatalog: animeList | null
  isLoading: boolean
  error: string | null
}

const initialState: CatalogState = {
  animeListForCatalog: null,
  isLoading: false,
  error: null,
}

export const fetchNewAnimeListForCatalog = createAsyncThunk(
  'catalog/fetchNewAnimeListForCatalog',
  async (_, thunkAPI) => {
    try {
      const response = await getNewAnimeListForCatalog()
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const CatalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNewAnimeListForCatalog.fulfilled.type]: (state, action: PayloadAction<animeList>) => {
      state.isLoading = false
      state.error = null
      state.animeListForCatalog = action.payload
    },
    [fetchNewAnimeListForCatalog.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchNewAnimeListForCatalog.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {} = CatalogSlice.actions

export default CatalogSlice.reducer
