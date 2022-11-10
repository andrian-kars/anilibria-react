import { Route, Routes } from 'react-router-dom';
import {
  CatalogPage,
  InitialPage,
  ErrorPage,
  ReleasePage,
  SchedulePage,
  TeamPage,
} from 'src/components/pages';
import { ERROR_CODE_404 } from 'src/constants';
import { Header, Main } from './components/layouts';
import './styles/index.scss';
import { useEffectOnce, usePlayer } from 'src/hooks';
import { themeAdapter } from 'src/helpers/adapters';
import { SidesProvider } from 'src/context/SidesContext';

export const App = () => {
  usePlayer();

  useEffectOnce(() => {
    const theme = themeAdapter.theme;

    for (const key in theme) {
      document.body.setAttribute(`data-theme-${key}`, theme[key]);
    }
  });

  return (
    <SidesProvider>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/release/:titleCode" element={<ReleasePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<ErrorPage errorCode={ERROR_CODE_404} />} />
        </Routes>
      </Main>
    </SidesProvider>
  );
};