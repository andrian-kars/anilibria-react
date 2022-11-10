import cn from 'classnames';
import s from './Navigation.module.scss';
import { useCallback, useContext } from 'react';
import { SidesContext } from 'src/context/SidesContext';
import { NavigationItem } from './NavigationItem';
import { NavigationSvgs } from './NavigationSvgs';

const NAV_ITEMS = [
  { to: '/', text: 'Главная', svg: 'main' },
  { to: '/catalog', text: 'Релизы', svg: 'catalog' },
  { to: '/schedule', text: 'Расписание', svg: 'schedule' },
  { to: '/random', text: 'Случайное', svg: 'random' },
  { to: '/team', text: 'Команда', svg: 'team' },
  { to: 'https://anilibria.app', text: 'Приложение', svg: 'app' },
  {
    to: 'https://www.anilibria.tv/pages/donate.php',
    text: 'Поддержать проект',
    svg: 'support',
  },
];

export const Navigation = () => {
  const { sides, sidesActions } = useContext(SidesContext);
  const handleModalClose = useCallback(() => sidesActions.triggerMobileSidesActive(false), []);

  return (
    <nav className={cn(s.navigation, sides.isMobileSidesActive && s.showMobile)}>
      <NavigationSvgs />
      <ul className={s.whrapper}>
        {NAV_ITEMS.map((el) => (
          <NavigationItem
            key={`${el.to}: ${el.text}`}
            to={el.to}
            text={el.text}
            svg={el.svg}
            onClick={handleModalClose}
          />
        ))}
      </ul>
    </nav>
  );
};
