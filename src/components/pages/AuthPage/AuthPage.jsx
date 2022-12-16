// import cn from 'classnames';
import { useState, useEffect } from 'react';
import s from './AuthPage.module.scss';
import { Text, Heading, Button } from 'src/components/common';
import { useEffectOnce } from 'src/hooks';
import store from 'src/store/authStore';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const PAGE_TITLE = 'Логін';

export const AuthPage = observer(() => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChagne(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChagne(event) {
    setPassword(event.target.value);
  }

  function handleLogin() {
    store.login(email, password);
  }

  function handleLogout() {
    store.logout();
  }

  useEffectOnce(() => {
    if (store.isAuth) {
      navigate('/');
    }

    document.title = PAGE_TITLE;
  });

  useEffect(() => {
    if (store.isAuth) {
      navigate('/');
    }
  }, [store.isAuth]);

  return (
    <section className={s.content}>
      <Heading type="h3" content="Login" className={s.heading} />
      <Text className={s.text}>
        {store.isAuth ? `user is logged in as ${store.user.email}` : 'user is not logged in'}
      </Text>
      <div>
        <input
          onChange={handleEmailChagne}
          type="text"
          placeholder="Enter your email"
          value={email}
        />
        <input
          onChange={handlePasswordChagne}
          type="password"
          placeholder="Enter your password"
          value={password}
        />
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleLogout}>Logout</Button>
        <Button>Registration</Button>
      </div>
      <Button>get users</Button>
    </section>
  );
});
