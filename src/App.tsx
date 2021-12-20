import { Route, Routes } from 'react-router-dom'
import { BannerPatreon, Footer, GlobalNavigation, Header } from './components'
import { Content, Main, Side } from './components/layouts'
import { useScript } from './hooks/player'
import {
  Catalog,
  Donate,
  Favorites,
  Initial,
  Login,
  Page404,
  Profile,
  Release,
  Rules,
  Schedule,
  Team,
} from './pages'

export const App = () => {
  useScript()

  const GlobalNavigationItems = [
    { to: '/', text: 'ГЛАВНАЯ', backgroundColor: '#b32121' },
    { to: '/pages/catalog', text: 'РЕЛИЗЫ', backgroundColor: '#a01e1e' },
    { to: '/pages/schedule', text: 'РАСПИСАНИЕ', backgroundColor: '#881919' },
    { to: '/public/random', text: 'СЛУЧАЙНОЕ', backgroundColor: '#731515' },
    { to: 'https://anilibria.app', text: 'ПРИЛОЖЕНИЕ', backgroundColor: '#641212' },
    { to: '/pages/team', text: 'КОМАНДА', backgroundColor: '#560f0f' },
    { to: '/pages/donate', text: 'ПОДДЕРЖАТЬ ПРОЕКТ', backgroundColor: '#460c0c' },
  ]

  return (
    <>
      {/* <Header
        // href={'https://www.anilibria.tv/dg'}
        // adImgUrl={'https://static.anilibria.tv/img/other/a/DG.png'}
        defaultImgUrl={'https://static.anilibria.tv/img/29.png'}
        // width={260}
        // height={70}
        // top={70}
        // marginLeft={360}
        adOff={true}
      /> */}
      <Header
        href={'https://www.anilibria.tv/bok'}
        adImgUrl={'https://static.anilibria.tv/img/other/a/bok.png'}
        defaultImgUrl={'https://static.anilibria.tv/img/29.png'}
        width={240}
        height={70}
        top={138}
        marginLeft={150}
        adOff={false}
      />
      <Main>
        <Content>
          <GlobalNavigation items={GlobalNavigationItems} />
          <BannerPatreon href={'https://www.patreon.com/anilibria/posts'} />
          <Routes>
            <Route path="/" element={<Initial />} />
            <Route path="/pages/catalog" element={<Catalog />} />
            <Route path="/pages/schedule" element={<Schedule />} />
            <Route path="/pages/team" element={<Team />} />
            <Route path="/pages/donate" element={<Donate />} />
            <Route path="/pages/rules" element={<Rules />} />
            <Route path="/pages/profile" element={<Profile />} />
            <Route path="/pages/login" element={<Login />} />
            <Route path="/pages/favorites" element={<Favorites />} />
            <Route path="/release/:titleCode" element={<Release />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Content>
        <Side />
      </Main>
      <Footer />
    </>
  )
}
