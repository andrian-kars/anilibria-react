import PropTypes from 'prop-types';
import s from './Checkbox.module.scss';
import { memo } from 'react';

export const Checkbox = memo(({ children, checked, onChange }) => (
  <label className={s.checkbox}>
    <div className={s.box}>
      <input
        type="checkbox"
        checked={checked}
        className={checked && s.check}
        onChange={onChange}
      />
    </div>

    <div>{children}</div>
  </label>
));

Checkbox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
