import { Route, Routes } from 'react-router-dom'
import { Header, Navigation } from 'src/components'
import { Initial, Catalog, Release } from 'src/pages'
import { Main, Side } from 'src/components/layouts'
import { useScript } from 'src/hooks/player'
import { useAppSelector } from 'src/hooks/redux'
import { Error } from './components/common'

export const App = () => {
  useScript()

  const { showMenu, showSide, globalNavigationItems } = useAppSelector(
    (state) => state.layoutsReducer
  )

  return (
    <>
      {console.log('render')}
      <Header />
      <Navigation show={showMenu} items={globalNavigationItems} />
      <Main>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/catalog" element={<Catalog />} />
          {/* <Route path="/pages/schedule" element={<Schedule />} />
          <Route path="/pages/team" element={<Team />} />
          <Route path="/pages/donate" element={<Donate />} />
          <Route path="/pages/rules" element={<Rules />} />
          <Route path="/pages/profile" element={<Profile />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/favorites" element={<Favorites />} /> */}
          <Route path="/release" element={<Release />} />
          <Route path="/release/:titleCode" element={<Release />} />
          <Route path="*" element={<Error error="404" />} />
        </Routes>
      </Main>
      <Side show={showSide} />
    </>
  )
}
