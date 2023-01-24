import PropTypes from 'prop-types';
import s from './Checkbox.module.scss';
import { memo } from 'react';

export const Checkbox = memo(({ children, checked, onChange }) => (
  <div className={s.containter}>
    <input className={s.checkbox} type="checkbox" checked={checked} onChange={onChange} />
    {children}
  </div>
));

Checkbox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};