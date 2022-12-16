// import cn from 'classnames';
import { useState } from 'react';
import s from './RegistrationPage.module.scss';
import { Text, Heading, Button } from 'src/components/common';
import { useEffectOnce } from 'src/hooks';

const PAGE_TITLE = 'Reg';

export const RegistrationPage = () => {
  useEffectOnce(() => {
    document.title = PAGE_TITLE;
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChagne(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChagne(event) {
    setPassword(event.target.value);
  }

  return (
    <section className={s.content}>
      <Heading type="h3" content="Registration" className={s.heading} />
      <Text className={s.text}>Some RegistrationPage</Text>
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
        <Button>Registration</Button>
      </div>
    </section>
  );
};
