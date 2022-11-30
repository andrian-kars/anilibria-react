import cn from 'classnames';
import PropTypes from 'prop-types';
import s from './ButtonSvg.module.scss';

export const ButtonSvg = ({ className, onClick, disabled, type = 'button', children, ...rest }) => (
  <button
    className={className ? cn(className, s.button) : s.button}
    type={type}
    disabled={disabled}
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
);

ButtonSvg.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};
