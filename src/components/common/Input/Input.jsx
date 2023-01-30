import PropTypes from 'prop-types';
import s from './Input.module.scss';
import { memo } from 'react';

export const Input = memo(
  ({ type = 'text', value, placeholder, title, onChange, onFocus, disabled = false, icon }) => {
    return (
      <div className={s.wrapper}>
        <div className={s.icon}>{icon}</div>
        <input
          className={s.input}
          type={type}
          value={value}
          placeholder={placeholder}
          title={title}
          onChange={onChange}
          onFocus={onFocus}
          disabled={disabled}
        />
      </div>
    );
  },
);

Input.propTypes = {
  icon: PropTypes.PropTypes.element,
  type: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
