import PropTypes from 'prop-types';
import { memo, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, Input, Checkbox, Text } from 'src/components/common';
import { FormattedMessage, useIntl } from 'react-intl';
import { TERMS_PAGE_PATH, AUTH_PAGE_REGISTRATION } from 'src/constants';
import { emailSchema, passwordSchema } from './AuthPageSchema';
import s from './AuthPage.module.scss';
import { EmailIcon, ShowHidePasswordIcon } from './AuthSVGs';

export const AuthPageForm = memo(({ buttonText, onSubmit, isLogin, errorMessage }) => {
  const { formatMessage } = useIntl();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warningMessage, setWarningMessage] = useState(errorMessage || '');

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setWarningMessage(errorMessage);
    if (location.pathname === AUTH_PAGE_REGISTRATION) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }, [location, errorMessage]);

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

    switch (false) {
      case formPass || formMail || isChecked:
        setWarningMessage('pass mail checkbox');
        break;
      case formPass || formMail:
        setWarningMessage(formatMessage({ id: 'loginForm.emailAndPassInvalid' }));
        break;
      case formMail || isChecked:
        setWarningMessage('mail checkbox');
        break;
      case formPass || isChecked:
        setWarningMessage('pass checkbox');
        break;
      case formMail:
        setWarningMessage(formatMessage({ id: 'loginForm.emailInvalid' }));
        break;
      case formPass:
        setWarningMessage(formatMessage({ id: 'loginForm.passwordInvalid' }));
        break;
      case isChecked:
        setWarningMessage('checkbox');
        break;
    }

    if (formMail && formPass && isChecked) {
      onSubmit(email, password);
    }
  };

  const handleCheked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <form className={s.formContent}>
      <div className={s.warningContainer}>{warningMessage && <Text>{warningMessage}</Text>}</div>
      <Input
        onChange={handleEmailChagne}
        type="email"
        placeholder={formatMessage({ id: 'loginForm.placeholderEmail' })}
        value={email}
        icon={<EmailIcon />}
      />

      <Input
        onChange={handlePasswordChagne}
        type={isPasswordShown ? 'text' : 'password'}
        placeholder={formatMessage({ id: 'loginForm.placeholderPassword' })}
        value={password}
        icon={
          <ShowHidePasswordIcon
            setPasswordShown={setIsPasswordShown}
            passwordShown={isPasswordShown}
          />
        }
      />

      {!isLogin && (
        <Checkbox onChange={handleCheked} checked={isChecked}>
          <Text>
            <FormattedMessage id={'loginForm.termsText'} />
            <NavLink className={s.link} to={TERMS_PAGE_PATH}>
              {formatMessage({ id: 'loginForm.termsLink' })}
            </NavLink>
          </Text>
        </Checkbox>
      )}

      <Button onClick={handleFormSubmit}>{buttonText}</Button>
    </form>
  );
});

AuthPageForm.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};
