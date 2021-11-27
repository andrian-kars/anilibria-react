import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  getGenres,
  getListFromAdvancedSearch,
  getNewAnimeListForCatalog,
  getYears,
} from '../../api/catalogApi'
import { animeList, passedParamsAdvancedSearch, selectValues } from '../../types'

export interface CatalogState {
  animeListForCatalog: animeList | null
  years: selectValues | null
  genres: selectValues | null
  seasons: selectValues
  isLoading: boolean
  error: string | null
}

const initialState: CatalogState = {
  animeListForCatalog: null,
  years: null,
  genres: null,
  seasons: [
    { value: 1, label: 'Зима' },
    { value: 2, label: 'Весна' },
    { value: 3, label: 'Лето' },
    { value: 4, label: 'Осень' },
  ],
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
      return {
        list: list.data,
        years: years.data.filter((el) => el <= new Date().getFullYear()).reverse(),
        genres: genres.data,
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const fetchListFromAdvancedSearch = createAsyncThunk(
  'catalog/fetchListFromAdvancedSearch',
  async (query: passedParamsAdvancedSearch, thunkAPI) => {
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
      action: PayloadAction<{ list: animeList; years: Array<number>; genres: Array<string> }>
    ) => {
      state.isLoading = false
      state.error = null
      state.animeListForCatalog = action.payload.list
      state.years = action.payload.years.map((el) => ({
        label: el,
        value: el,
      }))
      state.genres = action.payload.genres.map((el) => ({
        label: el,
        value: el,
      }))
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
