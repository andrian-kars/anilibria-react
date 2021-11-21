import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './components/Footer'
import { GlobalNavigation } from './components/GlobalNavigation'
import { Header } from './components/Header'

export const App = () => {
  const GlobalNavigationItems = [
    { to: '/', text: 'ГЛАВНАЯ', backgroundColor: '#b32121' },
    { to: '/pages/catalog.php', text: 'РЕЛИЗЫ', backgroundColor: '#a01e1e' },
    { to: '/pages/schedule.php', text: 'РАСПИСАНИЕ', backgroundColor: '#881919' },
    { to: '/public/random.php', text: 'СЛУЧАЙНОЕ', backgroundColor: '#731515' },
    { to: 'https://anilibria.app', text: 'ПРИЛОЖЕНИЕ', backgroundColor: '#641212' },
    { to: '/pages/team.php', text: 'КОМАНДА', backgroundColor: '#560f0f' },
    { to: '/pages/donate.php', text: 'ПОДДЕРЖАТЬ ПРОЕКТ', backgroundColor: '#460c0c' },
  ]

  return (
    <Router>
      <Header
        // href={'https://www.anilibria.tv/dg'}
        // adImgUrl={'https://static.anilibria.tv/img/other/a/DG.png'}
        defaultImgUrl={'https://static.anilibria.tv/img/29.png'}
        // width={260}
        // height={70}
        // top={70}
        // marginLeft={360}
        adOff={true}
      />
      {/* <Header
        href={'https://www.anilibria.tv/bok'}
        adImgUrl={'https://static.anilibria.tv/img/other/a/bok.png'}
        defaultImgUrl={'https://static.anilibria.tv/img/29.png'}
        width={240}
        height={70}
        top={138}
        marginLeft={150}
        adOff={false}
      /> */}
      <main>
        <section style={{ width: '880px' }}>
          <GlobalNavigation items={GlobalNavigationItems} />
        </section>
      </main>
      <Footer />
    </Router>
  )
}

// $width: 240px;
// $height: 70px;
// $top: 70px;
// $margin-left: 360px;
