// import cn from 'classnames';
import { useEffect } from 'react';
import s from './AuthPage.module.scss';
import { Text, Heading } from 'src/components/common';
import store from 'src/store/authStore';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthPageForm } from './AuthPageForm';
import { INITIAL_PAGE_PATH } from 'src/constants';
import { useCallback } from 'react';

export const AuthPage = observer(() => {
  const navigate = useNavigate();
  const authType = useParams().authType;
  const { isAuth, user } = store;
  const isLogin = authType === 'login';
  const pageTitle = isLogin ? 'login' : 'registration';

  const handleLogin = useCallback((email, password) => {
    store.login(email, password);
  });

  const handleRegistration = useCallback((email, password) => {
    store.registration(email, password);
  });

  useEffect(() => {
    if (isAuth || (authType !== 'login' && authType !== 'registration')) {
      navigate(INITIAL_PAGE_PATH);
    } else {
      document.title = pageTitle;
    }
  }, [isAuth, authType]);

  return (
    <section className={s.content}>
      <Heading type="h3" content="Login" className={s.heading} />
      <Text className={s.text}>
        {isAuth ? `user is logged in as ${user.email}` : 'user is not logged in'}
      </Text>
      <AuthPageForm
        buttonText={pageTitle}
        buttonClick={isLogin ? handleLogin : handleRegistration}
      />
    </section>
  );
});
