import { Burger, Heading } from 'src/components/common';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Search } from './Search/Search';
import logo from 'src/assets/images/logo.png';
import layoutStore from 'src/store/layoutStore';
import { observer } from 'mobx-react-lite';

export const Header = observer(() => {
  const { formatMessage } = useIntl();

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
            isActive={layoutStore.isMobileSidesActive}
            setIsActive={layoutStore.triggerMobileSidesActive}
          />
        </div>
      </div>
    </header>
  );
});
