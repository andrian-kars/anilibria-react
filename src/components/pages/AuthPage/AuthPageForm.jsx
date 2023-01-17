import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Input, Checkbox } from 'src/components/common';
import { useIntl } from 'react-intl';
import { TERMS_PAGE_PATH } from 'src/constants';
import { emailSchema, passwordSchema } from 'src/Validations/UserValidation';
import s from './AuthPage.module.scss';

export const AuthPageForm = memo(({ buttonText, buttonClick, isLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [checked, setChecked] = useState(false);

  const [checkEmail, setCheckEmail] = useState();
  const [checkPass, setCheckPass] = useState();

  const { formatMessage } = useIntl();

  const handleEmailChagne = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChagne = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formMail = await emailSchema.isValid({ userEmail: email });
    const formPass = await passwordSchema.isValid({ userPassword: password });

    if (!formMail) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }

    if (!formPass) {
      setCheckPass(true);
    } else {
      setCheckPass(false);
    }

    if (formMail && formPass) {
      buttonClick({ userEmail: email, userPassword: password });
    }
  };

  const handleCheked = () => {
    setChecked(!checked);
  };

  const showHidePasswordHandler = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <form className={s.content}>
      <div className={s.warningContainer}>
        {checkEmail && <p>{formatMessage({ id: 'loginForm.emailInvalid' })}</p>}
        {checkPass && <p>{formatMessage({ id: 'loginForm.passwordInvalid' })}</p>}
      </div>
      <Input
        onChange={handleEmailChagne}
        type="email"
        placeholder={formatMessage({ id: 'loginForm.placeholderEmail' })}
        value={email}
        icon={
          <svg viewBox="0 0 32 32">
            <path d="M28,13a1,1,0,0,0-1,1v8a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v8a3,3,0,0,0,.88,2.12A3,3,0,0,0,6,25H26a3,3,0,0,0,2.12-.88A3,3,0,0,0,29,22V14A1,1,0,0,0,28,13Z" />
            <path d="M15.4,18.8a1,1,0,0,0,1.2,0L28.41,9.94a1,1,0,0,0,.3-1.23,3.06,3.06,0,0,0-.59-.83A3,3,0,0,0,26,7H6a3,3,0,0,0-2.12.88,3.06,3.06,0,0,0-.59.83,1,1,0,0,0,.3,1.23ZM6,9H26a.9.9,0,0,1,.28,0L16,16.75,5.72,9A.9.9,0,0,1,6,9Z" />
          </svg>
        }
      />

      <Input
        onChange={handlePasswordChagne}
        type={passwordShown ? 'text' : 'password'}
        placeholder={formatMessage({ id: 'loginForm.placeholderPassword' })}
        value={password}
        icon={
          <svg
            viewBox="0 0 64 64"
            enableBackground="new 0 0 64 64"
            onClick={showHidePasswordHandler}
          >
            <path
              d="M32,15C11.169,15,0.769,30.242,0.336,30.891c-0.448,0.672-0.448,1.547,0,2.219C0.769,33.758,11.169,49,32,49
		s31.231-15.242,31.664-15.891c0.448-0.672,0.448-1.547,0-2.219C63.231,30.242,52.831,15,32,15z M32,45
		C16.493,45,7.234,35.322,4.512,31.996C7.225,28.663,16.436,19,32,19c15.507,0,24.766,9.678,27.488,13.004
		C56.775,35.337,47.564,45,32,45z"
            />
            <path
              d="M32,23c-4.963,0-9,4.038-9,9s4.037,9,9,9s9-4.038,9-9S36.963,23,32,23z M32,37c-2.757,0-5-2.243-5-5s2.243-5,5-5
		s5,2.243,5,5S34.757,37,32,37z"
            />
          </svg>
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
  buttonClick: PropTypes.func.isRequired,
};
