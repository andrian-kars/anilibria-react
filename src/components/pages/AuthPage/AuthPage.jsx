import { useEffect, useState } from 'react';
import s from './AuthPage.module.scss';
import { Text, Heading } from 'src/components/common';
import store from 'src/store/authStore';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthPageForm } from './AuthPageForm';
import { INITIAL_PAGE_PATH } from 'src/constants';
import { useCallback } from 'react';
import { useIntl } from 'react-intl';

export const AuthPage = observer(() => {
  const navigate = useNavigate();
  const authType = useParams().authType;

  const { formatMessage } = useIntl();
  const { isAuth, user } = store;

  const [isLogin, setIsLogin] = useState(authType === 'login');

  const pageTitle = isLogin
    ? formatMessage({ id: 'authPage.login' })
    : formatMessage({ id: 'authPage.register' });

  const handleLogin = useCallback((email, password) => {
    store.login(email, password);
  });

  const handleRegistration = useCallback((email, password) => {
    store.registration(email, password);
  });

  const createAccountHandle = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    if (isAuth || (authType !== 'login' && authType !== 'registration')) {
      navigate(INITIAL_PAGE_PATH);
    } else {
      document.title = pageTitle;
    }
  }, [isAuth, authType]);

  return (
    <section className={s.content}>
      <Heading type="h3" content={pageTitle} className={s.heading} />

      <Text className={s.text}>
        {isAuth
          ? `${formatMessage({ id: 'authPage.userLogged' })} ${user.email}`
          : `${formatMessage({ id: 'authPage.userNotLogged' })}`}
      </Text>

      <AuthPageForm
        buttonText={pageTitle}
        buttonClick={isLogin ? handleLogin : handleRegistration}
        isLogin={isLogin}
      />

      {isLogin ? (
        <p>
          Don't have an account?{' '}
          <span className={s.authSpan} onClick={createAccountHandle}>
            Create One
          </span>
        </p>
      ) : (
        <p>
          Already registered?{' '}
          <span className={s.authSpan} onClick={createAccountHandle}>
            Log In
          </span>
        </p>
      )}
    </section>
  );
});
