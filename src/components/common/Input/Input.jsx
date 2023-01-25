import PropTypes from 'prop-types';
import s from './Input.module.scss';
import { memo } from 'react';

export const Input = memo(
  ({ type = 'text', value, placeholder, onChange, disabled = false, icon }) => {
    return (
      <div className={s.wrapper}>
        <div className={s.icon}>{icon}</div>
        <input
          className={s.input}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    );
  },
);

Input.propTypes = {
  icon: PropTypes.PropTypes.element,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
