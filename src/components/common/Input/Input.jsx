import PropTypes from 'prop-types';
import s from './Input.module.scss';
import { useState } from 'react';

export const Input = ({ type, value, placeholder, onChange, disabled, icon }) => {
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  const checkCapsLock = (e) => {
    if (e.getModifierState('CapsLock')) {
      setIsCapsLockOn(true);
    } else {
      setIsCapsLockOn(false);
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.icon}>{icon}</div>
      <input
        className={s.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={checkCapsLock}
        disabled={disabled}
      />
      <div className={s.caps}>
        {isCapsLockOn && (
          <svg viewBox="0 0 24 24">
            <path d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM4.5 13.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1z" />
          </svg>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
