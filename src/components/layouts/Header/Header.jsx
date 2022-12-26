import logo from 'public/assets/images/logo.png';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { useIntl } from 'react-intl';
import { useDimension } from 'src/hooks';
import { Burger, Heading, Button } from 'src/components/common';
import { SidesContext } from 'src/context/SidesContext';
import { Search } from './Search/Search';
import { AUTH_PAGE_LOGIN, TINY_TABLET_BREAKPOINT } from 'src/constants';

export const Header = () => {
  const { formatMessage } = useIntl();
  const { sides, sidesActions } = useContext(SidesContext);
  const { width } = useDimension();

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
        {width > TINY_TABLET_BREAKPOINT && (
          <NavLink to={AUTH_PAGE_LOGIN}>
            <Button>{formatMessage({ id: 'loginForm.loginButtonText' })}</Button>
          </NavLink>
        )}
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
