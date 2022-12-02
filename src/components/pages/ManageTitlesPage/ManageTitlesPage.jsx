// import cn from 'classnames';
import { Text, Heading } from 'src/components/common';
import s from './ManageTitlesPage.module.scss';
import { useEffectOnce } from 'src/hooks';
import { ReleaseContext } from 'src/context';
import { useContext } from 'react';
import { ManageTitlesPageSvgs } from './ManageTitlesPageSvgs';
import { ButtonSvg } from 'src/components/common';
import { STORAGE_RECENT_ANIMES, STORAGE_FAVOURITE_ANIMES } from 'src/constants';
import { NavLink } from 'react-router-dom';

const PAGE_TITLE = 'Керувати тайтлами';

export const ManageTitlesPage = () => {
  const { recentAnimes, favouriteAnimes, releaseActions } = useContext(ReleaseContext);

  useEffectOnce(() => {
    document.title = PAGE_TITLE;
  });

  function handleAnimesClear(type) {
    releaseActions.clearAnimes(type);
  }

  function handleAnimeDelete(type, code) {
    releaseActions.deleteAnime(type, code);
  }
  return (
    <section className={s.content}>
      <ManageTitlesPageSvgs />
      <Heading
        type="h3"
        content={'Тут ти можеш керувати тайтлами'.toUpperCase()}
        className={s.heading}
      />
      {[
        { type: STORAGE_FAVOURITE_ANIMES, name: 'Любимі релізи', items: favouriteAnimes },
        { type: STORAGE_RECENT_ANIMES, name: 'Недавні релізи', items: recentAnimes },
      ].map(({ name, items, type }) => (
        <div key={name} className={s.team}>
          <div className={s.dayName}>
            <Text>{name}</Text>
            {items && (
              <ButtonSvg onClick={() => handleAnimesClear(type)} title="Видалити тайтли">
                <svg className={s.svg}>
                  <use href="#clear"></use>
                </svg>
              </ButtonSvg>
            )}
          </div>
          <div className={s.names}>
            {items ? (
              items.map(({ titleCode, titleName }) => (
                <div className={s.title} key={titleCode}>
                  <NavLink title={titleName} className={s.link} to={`/release/${titleCode}`}>
                    {titleName}
                  </NavLink>
                  <ButtonSvg
                    onClick={() => handleAnimeDelete(type, titleCode)}
                    title="Видалити тайтл"
                  >
                    <svg className={s.svg}>
                      <use href="#delete"></use>
                    </svg>
                  </ButtonSvg>
                </div>
              ))
            ) : (
              <div>{name} відсутні</div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
