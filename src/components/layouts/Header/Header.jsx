import { Burger, Heading } from 'src/components/common';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useContext } from 'react';
import { SidesContext } from 'src/context/SidesContext';
import { Search } from './Search/Search';
import logo from 'src/assets/images/logo.png';

export const Header = () => {
  const { formatMessage } = useIntl();
  const { sides, sidesActions } = useContext(SidesContext);

  return (
    <header id="top" className={s.whrapper}>
      <div className={s.left}>
        <NavLink to={'/'} className={s.whrapperHomeLink}>
          <img className={s.logo} src={logo} alt="logo" />
          <Heading type="h1" content={formatMessage({ id: 'appName' })} className={s.heading} />
        </NavLink>
      </div>
      <Search />
      <div className={s.right}>
        <div className={s.burgerNav}>
          <Burger
            isActive={sides.isMobileSidesActive}
            setIsActive={sidesActions.triggerMobileSidesActive}
          />
        </div>
      </div>
    </header>
  );
};
