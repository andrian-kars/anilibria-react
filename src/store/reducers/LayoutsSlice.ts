import { createSlice } from '@reduxjs/toolkit'
import { globalNavigationItems } from 'src/types'

export interface LayoutState {
  globalNavigationItems: globalNavigationItems
  showMenu: boolean
  isLoading: boolean
  error: string | null
}

const initialState: LayoutState = {
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
  isLoading: false,
  error: null,
}

export const LayoutsSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setShowMenu(state) {
      state.showMenu = !state.showMenu
    },
  },
})

export const { setShowMenu } = LayoutsSlice.actions

export default LayoutsSlice.reducer
