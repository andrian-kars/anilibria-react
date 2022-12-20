import PropTypes from 'prop-types';

export const Input = ({ type, value, placeholder, onChange, disabled }) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    disabled={disabled}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
