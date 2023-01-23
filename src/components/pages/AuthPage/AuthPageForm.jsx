import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Input, Checkbox } from 'src/components/common';
import { useIntl } from 'react-intl';
import { TERMS_PAGE_PATH } from 'src/constants';
import { emailSchema, passwordSchema } from './AuthPageSchema';
import s from './AuthPage.module.scss';
import { EmailIcon, ShowHidePasswordIcon } from './AuthSVGs';

export const AuthPageForm = memo(({ buttonText, onSubmit, isLogin }) => {
  const { formatMessage } = useIntl();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [checked, setChecked] = useState(false);

  const [checkEmail, setCheckEmail] = useState();
  const [checkPass, setCheckPass] = useState();

  const handleEmailChagne = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChagne = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formMail = await emailSchema.isValid({ userEmail: email });
    const formPass = await passwordSchema.isValid({ userPassword: password });

    setCheckEmail(!formMail);
    setCheckPass(!formPass);

    if (formMail && formPass) {
      onSubmit(email, password);
    }
  };

  const handleCheked = () => {
    setChecked(!checked);
  };

  return (
    <form className={s.formContent}>
      <div className={s.warningContainer}>
        {checkEmail && <p>{formatMessage({ id: 'loginForm.emailInvalid' })}</p>}
        {checkPass && <p>{formatMessage({ id: 'loginForm.passwordInvalid' })}</p>}
      </div>
      <Input
        onChange={handleEmailChagne}
        type="email"
        placeholder={formatMessage({ id: 'loginForm.placeholderEmail' })}
        value={email}
        icon={<EmailIcon />}
      />

      <Input
        onChange={handlePasswordChagne}
        type={passwordShown ? 'text' : 'password'}
        placeholder={formatMessage({ id: 'loginForm.placeholderPassword' })}
        value={password}
        icon={
          <ShowHidePasswordIcon setPasswordShown={setPasswordShown} passwordShown={passwordShown} />
        }
      />

      {!isLogin && (
        <Checkbox onChange={handleCheked} checked={checked}>
          <NavLink to={TERMS_PAGE_PATH}>{formatMessage({ id: 'loginForm.terms' })}</NavLink>
        </Checkbox>
      )}

      <Button onClick={handleFormSubmit} disabled={isLogin ? false : !checked}>
        {buttonText}
      </Button>
    </form>
  );
});

AuthPageForm.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
