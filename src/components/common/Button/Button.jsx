import cn from 'classnames';
import PropTypes from 'prop-types';
import s from './Button.module.scss';

export const Button = ({ className, onClick, disabled, type = 'button', children }) => (
  <button
    className={className ? cn(className, s.content) : s.content}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};
