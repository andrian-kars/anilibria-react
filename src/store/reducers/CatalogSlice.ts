import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  getGenres,
  getListFromAdvancedSearch,
  getNewAnimeListForCatalog,
  getYears,
} from '../../api/catalogApi'
import { animeList } from '../../types'

export interface CatalogState {
  animeListForCatalog: animeList | null
  years: Array<number> | null
  genres: Array<string> | null
  seasons: Array<string>
  isLoading: boolean
  error: string | null
}

const initialState: CatalogState = {
  animeListForCatalog: null,
  years: null,
  genres: null,
  seasons: ['Зима', 'Весна', 'Лето', 'Осень'],
  isLoading: false,
  error: null,
}

export const fetchCatalogStart = createAsyncThunk(
  'catalog/fetchCatalogStart',
  async (_, thunkAPI) => {
    try {
      const list = await getNewAnimeListForCatalog()
      const years = await getYears()
      const genres = await getGenres()
      return [
        list.data,
        years.data.filter((el) => el <= new Date().getFullYear()).reverse(),
        genres.data.reverse(),
      ]
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const fetchListFromAdvancedSearch = createAsyncThunk(
  'catalog/fetchListFromAdvancedSearch',
  async (query: string, thunkAPI) => {
    try {
      const response = await getListFromAdvancedSearch(query)
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
    // initial
    [fetchCatalogStart.fulfilled.type]: (
      state,
      action: PayloadAction<[animeList, Array<number>, Array<string>]>
    ) => {
      state.isLoading = false
      state.error = null
      state.animeListForCatalog = action.payload[0]
      state.years = action.payload[1]
      state.genres = action.payload[2]
    },
    [fetchCatalogStart.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchCatalogStart.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    // fetchListFromAdvancedSearch
    [fetchListFromAdvancedSearch.fulfilled.type]: (state, action: PayloadAction<animeList>) => {
      state.isLoading = false
      state.error = null
      state.animeListForCatalog = action.payload
    },
    [fetchListFromAdvancedSearch.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchListFromAdvancedSearch.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.animeListForCatalog = null
      state.error = action.payload
    },
  },
})

export const {} = CatalogSlice.actions

export default CatalogSlice.reducer
