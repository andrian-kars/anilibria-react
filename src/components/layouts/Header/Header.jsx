import logo from 'src/assets/images/logo.png';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useDimension } from 'src/hooks';
import { Burger, Heading, Button } from 'src/components/common';
import { Search } from './Search/Search';
import layoutStore from 'src/store/layoutStore';
import { AUTH_PAGE_LOGIN, TINY_TABLET_BREAKPOINT } from 'src/constants';
import { observer } from 'mobx-react-lite';

export const Header = observer(() => {
  const { formatMessage } = useIntl();
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
            isActive={layoutStore.isMobileSidesActive}
            setIsActive={layoutStore.triggerMobileSidesActive}
          />
        </div>
      </div>
    </header>
  );
});
