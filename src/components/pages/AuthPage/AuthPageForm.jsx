import { memo, useState } from 'react';
import { Button } from 'src/components/common';
import PropTypes from 'prop-types';

export const AuthPageForm = memo(({ buttonText, buttonClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChagne(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChagne(event) {
    setPassword(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    buttonClick(email, password);
  }
  return (
    <form>
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
      <Button onClick={handleFormSubmit}>{buttonText}</Button>
    </form>
  );
});

AuthPageForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
};
