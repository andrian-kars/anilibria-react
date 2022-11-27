import cn from 'classnames';
import s from './Navigation.module.scss';
import { useCallback, useContext } from 'react';
import { SidesContext, ReleaseContext } from 'src/context';
import { NavigationItem } from './NavigationItem';
import { NavigationSvgs } from './NavigationSvgs';

const NAV_ITEMS = [
  [
    { to: '/', text: 'Главная', svg: 'main' },
    { to: '/catalog', text: 'Релизы', svg: 'catalog' },
    { to: '/schedule', text: 'Расписание', svg: 'schedule' },
    { to: '/random', text: 'Случайное', svg: 'random' },
    { to: '/team', text: 'Команда', svg: 'team' },
  ],
  [
    { to: 'https://anilibria.app', text: 'Приложение', svg: 'app' },
    {
      to: 'https://www.anilibria.tv/pages/donate.php',
      text: 'Поддержать проект',
      svg: 'support',
    },
  ],
];

export const Navigation = () => {
  const { sides, sidesActions } = useContext(SidesContext);
  const { recentAnimes } = useContext(ReleaseContext);
  const handleModalClose = useCallback(() => sidesActions.triggerMobileSidesActive(false), []);

  return (
    <nav className={cn(s.navigation, sides.isMobileSidesActive && s.showMobile)}>
      <NavigationSvgs />
      {NAV_ITEMS.map((linkType, i) => (
        <ul key={i} className={s.whrapper}>
          {linkType.map((el) => (
            <NavigationItem
              key={`${el.to}: ${el.text}`}
              to={el.to}
              text={el.text}
              svg={el.svg}
              onClick={handleModalClose}
            />
          ))}
        </ul>
      ))}
      <ul className={cn(s.whrapper, s.recentAnimes)}>
        {recentAnimes.slice(0, 7).map(({ titleCode, titleName }) => (
          <NavigationItem
            key={titleCode}
            to={`/release/${titleCode}`}
            text={titleName}
            onClick={handleModalClose}
          />
        ))}
      </ul>
    </nav>
  );
};
