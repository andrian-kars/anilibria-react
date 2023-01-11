import PropTypes from 'prop-types';
import s from './Input.module.scss';

export const Input = ({ type, value, placeholder, onChange, disabled, icon }) => (
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

Input.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
