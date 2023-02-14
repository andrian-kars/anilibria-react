import { useEffect } from 'react';
import s from './AuthPage.module.scss';
import { Text, Heading } from 'src/components/common';
import store from 'src/store/authStore';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthPageForm } from './AuthPageForm';
import { INITIAL_PAGE_PATH, AUTH_PAGE_LOGIN, AUTH_PAGE_REGISTRATION } from 'src/constants';
import { FormattedMessage, useIntl } from 'react-intl';

const LOGIN = 'login';

export const AuthPage = observer(() => {
  const navigate = useNavigate();
  const authType = useParams().authType;

  const { formatMessage } = useIntl();
  const { isAuth, errorMessage } = store;
  const isLogin = authType === LOGIN;

  const pageTitle = isLogin
    ? formatMessage({ id: 'authPage.login' })
    : formatMessage({ id: 'authPage.register' });

  const handleLogin = (email, password) => {
    store.login(email, password);
  };

  const handleRegistration = (email, password) => {
    store.registration(email, password);
  };

  const createAccountHandle = () => {
    isLogin ? navigate(AUTH_PAGE_REGISTRATION) : navigate(AUTH_PAGE_LOGIN);
  };

  useEffect(() => {
    if (isAuth || (authType !== LOGIN && authType !== 'registration')) {
      navigate(INITIAL_PAGE_PATH);
    } else {
      document.title = pageTitle;
    }
  }, [isAuth, authType]);

  return (
    <section className={s.content}>
      <Heading type="h3" content={pageTitle} className={s.heading} />

      <AuthPageForm
        buttonText={pageTitle}
        onSubmit={isLogin ? handleLogin : handleRegistration}
        errorMessage={errorMessage}
        isLogin={isLogin}
      />

      <Text>
        <FormattedMessage id={`authPage.bottom${isLogin ? 'Login' : 'Register'}Question`} />
        &nbsp;
        <Text type="span" className={s.authSpan} onClick={createAccountHandle}>
          <FormattedMessage id={`authPage.bottom${isLogin ? 'Login' : 'Register'}Span`} />
        </Text>
      </Text>
    </section>
  );
});
