import { globalNavigationItems, animeList } from 'src/types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAnimeListForSide } from 'src/api/layoutsApi'

export interface LayoutState {
  animeListForSide: animeList | null
  globalNavigationItems: globalNavigationItems
  showMenu: boolean
  showSide: boolean
  isLoading: boolean
  error: string | null
}

const initialState: LayoutState = {
  animeListForSide: null,
  globalNavigationItems: {
    navs: [
      { to: '/', text: 'Главная', svg: 'main' },
      { to: '/catalog', text: 'Релизы', svg: 'catalog' },
      { to: '/schedule', text: 'Расписание', svg: 'schedule' },
      { to: '/release/random', text: 'Случайное', svg: 'random' },
      { to: '/team', text: 'Команда', svg: 'team' },
    ],
    links: [
      { to: 'https://anilibria.app', text: 'Приложение', svg: 'app' },
      {
        to: 'https://www.anilibria.tv/pages/donate.php',
        text: 'Поддержать проект',
        svg: 'support',
      },
    ],
  },
  showMenu: true,
  showSide: true,
  isLoading: false,
  error: null,
}

export const fetchAnimeListForSide = createAsyncThunk(
  'layout/fetchAnimeListForSide',
  async (_, thunkAPI) => {
    try {
      const response = await getAnimeListForSide()
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const LayoutsSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setShowMenu(state) {
      state.showMenu = !state.showMenu
    },
    setShowSide(state) {
      state.showSide = !state.showSide
    },
  },
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

export const { setShowMenu, setShowSide } = LayoutsSlice.actions

export default LayoutsSlice.reducer
