import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Input } from 'src/components/common';
import { useIntl } from 'react-intl';
import { TERMS_PAGE_PATH } from 'src/constants';
import s from './AuthPage.module.scss';

export const AuthPageForm = memo(({ buttonText, buttonClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { formatMessage } = useIntl();

  const handleEmailChagne = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChagne = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    buttonClick(email, password);
  };

  return (
    <form className={s.content}>
      <Input
        onChange={handleEmailChagne}
        type="text"
        placeholder={formatMessage({ id: 'loginForm.placeholderEmail' })}
        value={email}
      />

      <Input
        onChange={handlePasswordChagne}
        type="password"
        placeholder={formatMessage({ id: 'loginForm.placeholderPassword' })}
        value={password}
      />
      <NavLink to={TERMS_PAGE_PATH}>{formatMessage({ id: 'loginForm.terms' })}</NavLink>
      <Button onClick={handleFormSubmit}>{buttonText}</Button>
    </form>
  );
});

AuthPageForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
};
