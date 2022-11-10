import PropTypes from 'prop-types';
import { Navigation } from '../Navigation/Navigation';
import { Side } from '../Side/Side';
import s from './Main.module.scss';

export const Main = ({ children }) => (
  <main className={s.main}>
    <Navigation />
    {children}
    <Side />
  </main>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
