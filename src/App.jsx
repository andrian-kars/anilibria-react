import { Route, Routes } from 'react-router-dom';
import {
  CatalogPage,
  InitialPage,
  ErrorPage,
  ReleasePage,
  SchedulePage,
  TeamPage,
  ManageTitlesPage,
  LoginPage,
  RegistrationPage,
} from 'src/components/pages';
import {
  ERROR_CODE_404,
  INITIAL_PAGE_PATH,
  LOGIN_PAGE_PATH,
  REGISTRATION_PAGE_PATH,
  CATALOG_PAGE_PATH,
  RELEASE_PAGE_PATH,
  SCHEDULE_PAGE_PATH,
  TEAM_PAGE_PATH,
  SETTINGS_PAGE_PATH,
  STORAGE_TOKEN,
} from 'src/constants';
import { Header, Main } from './components/layouts';
import './styles/index.scss';
import { useEffectOnce, usePlayer } from 'src/hooks';
import { themeAdapter } from 'src/helpers/adapters';
import { SidesProvider, ReleaseProvider } from 'src/context';
import authStore from 'src/store/authStore';
import { observer } from 'mobx-react-lite';

export const App = observer(() => {
  usePlayer();

  useEffectOnce(() => {
    const theme = themeAdapter.theme;

    for (const key in theme) {
      document.body.setAttribute(`data-theme-${key}`, theme[key]);
    }

    if (localStorage.getItem(STORAGE_TOKEN)) {
      authStore.checkAuth();
    }
  });

  return (
    <SidesProvider>
      <ReleaseProvider>
        <Header />
        <Main>
          <Routes>
            <Route path={INITIAL_PAGE_PATH} element={<InitialPage />} />
            <Route path={LOGIN_PAGE_PATH} element={<LoginPage />} />
            <Route path={REGISTRATION_PAGE_PATH} element={<RegistrationPage />} />
            <Route path={CATALOG_PAGE_PATH} element={<CatalogPage />} />
            <Route path={RELEASE_PAGE_PATH} element={<ReleasePage />} />
            <Route path={SCHEDULE_PAGE_PATH} element={<SchedulePage />} />
            <Route path={TEAM_PAGE_PATH} element={<TeamPage />} />
            <Route path={SETTINGS_PAGE_PATH} element={<ManageTitlesPage />} />
            <Route path="*" element={<ErrorPage errorCode={ERROR_CODE_404} />} />
          </Routes>
        </Main>
      </ReleaseProvider>
    </SidesProvider>
  );
});
