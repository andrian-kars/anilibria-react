import { Text, Heading } from 'src/components/common';
import s from './SettingsPage.module.scss';
import { ReleaseContext } from 'src/context';
import { useContext, useState } from 'react';
import { themeAdapter } from 'src/helpers/adapters';
import { SettingsPageSvgs } from './SettingsPageSvgs';
import { ButtonSvg } from 'src/components/common';
import { STORAGE_RECENT_ANIMES, STORAGE_FAVOURITE_ANIMES } from 'src/constants';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { BackgroundRadio } from 'src/components/common';

const BACKGROUND_THEME_CHOICES = [
  {
    name: 'background',
    value: 'light',
    color: '#fff',
    backgroundColor: '#fff',
  },
  {
    name: 'background',
    value: 'dark',
    color: '#000',
    backgroundColor: '#000',
  },
  {
    name: 'background',
    value: 'parchment',
    color: '#fcf5e5',
    backgroundColor: '#f6edd4',
  },
];

export const SettingsPage = () => {
  const { recentAnimes, favouriteAnimes, releaseActions } = useContext(ReleaseContext);
  const { formatMessage } = useIntl();

  const [theme, setTheme] = useState(themeAdapter.theme);

  const handleAnimesClear = (type) => {
    releaseActions.clearAnimes(type);
  };

  const handleAnimeDelete = (type, code) => {
    releaseActions.deleteAnime(type, code);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setTheme((prevState) => {
      const newTheme = { ...prevState, [name]: value };
      themeAdapter.theme = newTheme;

      return newTheme;
    });

    document.body.setAttribute(`data-theme-${name}`, value);
  };

  return (
    <section className={s.content}>
      <Heading
        type="h3"
        content={formatMessage({ id: 'themeSwitchHeader' })}
        className={s.heading}
      />

      <div onChange={onChangeHandler} className={s.team}>
        <div className={s.themeSwitchContainer}>
          {BACKGROUND_THEME_CHOICES.map(({ value, color, backgroundColor, name }) => (
            <BackgroundRadio
              key={value}
              name={name}
              backgroundColor={backgroundColor}
              color={color}
              value={value}
              defaultChecked={theme.background === value}
            />
          ))}
        </div>
      </div>

      <SettingsPageSvgs />
      <Heading
        type="h3"
        content={formatMessage({ id: 'manageTitlePage.title' })}
        className={s.heading}
      />

      {[
        {
          type: STORAGE_FAVOURITE_ANIMES,
          name: formatMessage({ id: 'manageTitlePage.favorite' }),
          items: favouriteAnimes,
        },
        {
          type: STORAGE_RECENT_ANIMES,
          name: formatMessage({ id: 'manageTitlePage.recentlyReleased' }),
          items: recentAnimes,
        },
      ].map(({ name, items, type }) => (
        <div key={name} className={s.team}>
          <div className={s.dayName}>
            <Text>{name}</Text>
            {items && (
              <ButtonSvg
                onClick={() => handleAnimesClear(type)}
                title={formatMessage({ id: 'manageTitlePage.removeTitle' })}
              >
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
                    title={formatMessage({ id: 'manageTitlePage.removeTitle' })}
                  >
                    <svg className={s.svg}>
                      <use href="#delete"></use>
                    </svg>
                  </ButtonSvg>
                </div>
              ))
            ) : (
              <div>
                {name} {formatMessage({ id: 'manageTitlePage.void' })}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
