import React from 'react';
import PropTypes from 'prop-types';
import s from './Text.module.scss';
import cn from 'classnames';

export const Text = ({ type = 'p', children, bold, className, ...rest }) =>
  React.createElement(type, { className: cn(s.p, bold && s.bold, className), ...rest }, children);

Text.propTypes = {
  type: PropTypes.string,
  bold: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};
