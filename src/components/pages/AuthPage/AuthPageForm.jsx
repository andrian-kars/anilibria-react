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
  const [warningMessage, setWarningMessage] = useState('');

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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

    if (!formMail && !formPass) {
      setWarningMessage(formatMessage({ id: 'loginForm.emailAndPassInvalid' }));
    } else {
      if (!formMail) {
        setWarningMessage(formatMessage({ id: 'loginForm.emailInvalid' }));
      }
      if (!formPass) {
        setWarningMessage(formatMessage({ id: 'loginForm.passwordInvalid' }));
      }
    }

    if (formMail && formPass) {
      onSubmit(email, password);
    }
  };

  const handleCheked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <form className={s.formContent}>
      <div className={s.warningContainer}>
        {warningMessage.length !== 0 && <p>{warningMessage}</p>}
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
          <NavLink to={TERMS_PAGE_PATH}>{formatMessage({ id: 'loginForm.terms' })}</NavLink>
        </Checkbox>
      )}

      <Button onClick={handleFormSubmit} disabled={isLogin ? false : !isChecked}>
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
