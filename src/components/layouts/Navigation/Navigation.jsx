import cn from 'classnames';
import s from './Navigation.module.scss';
import { useCallback, useContext } from 'react';
import { SidesContext, ReleaseContext } from 'src/context';
import { NavigationItem } from './NavigationItem';
import { NavigationSvgs } from './NavigationSvgs';
import { ButtonSvg } from 'src/components/common';
import { useNavigate } from 'react-router-dom';
import { useDimension } from 'src/hooks';
import { useIntl } from 'react-intl';
import { TINY_TABLET_BREAKPOINT, SETTINGS_PAGE_PATH, AUTH_PAGE_LOGIN } from 'src/constants';

const NAV_ITEMS = [
  [
    { to: '/', textId: 'nav.main', svg: 'main' },
    { to: '/catalog', textId: 'nav.catalog', svg: 'catalog' },
    { to: '/schedule', textId: 'nav.schedule', svg: 'schedule' },
    { to: '/random', textId: 'nav.random', svg: 'random' },
    { to: '/team', textId: 'nav.team', svg: 'team' },
  ],
  [
    { to: 'https://anilibria.app', textId: 'nav.app', svg: 'app' },
    {
      to: 'https://www.anilibria.tv/pages/donate.php',
      textId: 'nav.support',
      svg: 'support',
    },
  ],
];

export const Navigation = () => {
  const navigate = useNavigate();
  const { width } = useDimension();
  const { formatMessage } = useIntl();

  const { sides, sidesActions } = useContext(SidesContext);
  const { recentAnimes, favouriteAnimes } = useContext(ReleaseContext);
  const handleModalClose = useCallback(() => sidesActions.triggerMobileSidesActive(false), []);

  const handleSettingsClick = () => {
    navigate(SETTINGS_PAGE_PATH);
    handleModalClose();
  };

  const loginButtonHandler = () => {
    navigate(AUTH_PAGE_LOGIN);
    handleModalClose();
  };

  return (
    <nav className={cn(s.navigation, sides.isMobileSidesActive && s.showMobile)}>
      <NavigationSvgs />
      {width < TINY_TABLET_BREAKPOINT
        ? NAV_ITEMS.slice(0, 1).map((linkType, i) => (
            <ul key={i} className={s.whrapper}>
              {linkType.map((el) => (
                <NavigationItem
                  key={`${el.to}: ${el.text}`}
                  to={el.to}
                  text={formatMessage({ id: el.textId })}
                  svg={el.svg}
                  onClick={handleModalClose}
                />
              ))}
            </ul>
          ))
        : NAV_ITEMS.map((linkType, i) => (
            <ul key={i} className={s.whrapper}>
              {linkType.map((el) => (
                <NavigationItem
                  key={`${el.to}: ${el.text}`}
                  to={el.to}
                  text={formatMessage({ id: el.textId })}
                  svg={el.svg}
                  onClick={handleModalClose}
                />
              ))}
            </ul>
          ))}

      {favouriteAnimes && (
        <ul className={cn(s.whrapper, s.recentAnimes)}>
          {favouriteAnimes.slice(0, 5).map(({ titleCode, titleName }) => (
            <NavigationItem
              key={titleCode}
              to={`/release/${titleCode}`}
              text={titleName}
              svg="favourite"
              onClick={handleModalClose}
            />
          ))}
        </ul>
      )}

      {recentAnimes && (
        <ul className={cn(s.whrapper, s.recentAnimes)}>
          {recentAnimes.slice(0, favouriteAnimes ? 5 : 7).map(({ titleCode, titleName }) => (
            <NavigationItem
              key={titleCode}
              to={`/release/${titleCode}`}
              text={titleName}
              svg="recent"
              onClick={handleModalClose}
            />
          ))}
        </ul>
      )}

      <ButtonSvg
        className={s.button}
        onClick={handleSettingsClick}
        title={formatMessage({ id: 'nav.settings' })}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M12 8.666c-1.838 0-3.333 1.496-3.333 3.334s1.495 3.333 3.333 3.333 3.333-1.495 3.333-3.333-1.495-3.334-3.333-3.334m0 7.667c-2.39 0-4.333-1.943-4.333-4.333s1.943-4.334 4.333-4.334 4.333 1.944 4.333 4.334c0 2.39-1.943 4.333-4.333 4.333m-1.193 6.667h2.386c.379-1.104.668-2.451 2.107-3.05 1.496-.617 2.666.196 3.635.672l1.686-1.688c-.508-1.047-1.266-2.199-.669-3.641.567-1.369 1.739-1.663 3.048-2.099v-2.388c-1.235-.421-2.471-.708-3.047-2.098-.572-1.38.057-2.395.669-3.643l-1.687-1.686c-1.117.547-2.221 1.257-3.642.668-1.374-.571-1.656-1.734-2.1-3.047h-2.386c-.424 1.231-.704 2.468-2.099 3.046-.365.153-.718.226-1.077.226-.843 0-1.539-.392-2.566-.893l-1.687 1.686c.574 1.175 1.251 2.237.669 3.643-.571 1.375-1.734 1.654-3.047 2.098v2.388c1.226.418 2.468.705 3.047 2.098.581 1.403-.075 2.432-.669 3.643l1.687 1.687c1.45-.725 2.355-1.204 3.642-.669 1.378.572 1.655 1.738 2.1 3.047m3.094 1h-3.803c-.681-1.918-.785-2.713-1.773-3.123-1.005-.419-1.731.132-3.466.952l-2.689-2.689c.873-1.837 1.367-2.465.953-3.465-.412-.991-1.192-1.087-3.123-1.773v-3.804c1.906-.678 2.712-.782 3.123-1.773.411-.991-.071-1.613-.953-3.466l2.689-2.688c1.741.828 2.466 1.365 3.465.953.992-.412 1.082-1.185 1.775-3.124h3.802c.682 1.918.788 2.714 1.774 3.123 1.001.416 1.709-.119 3.467-.952l2.687 2.688c-.878 1.847-1.361 2.477-.952 3.465.411.992 1.192 1.087 3.123 1.774v3.805c-1.906.677-2.713.782-3.124 1.773-.403.975.044 1.561.954 3.464l-2.688 2.689c-1.728-.82-2.467-1.37-3.456-.955-.988.41-1.08 1.146-1.785 3.126" />
        </svg>
      </ButtonSvg>

      {width < TINY_TABLET_BREAKPOINT && (
        <ButtonSvg className={s.button} onClick={loginButtonHandler}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M14.053,0 C16.492,0 18.478,1.985 18.478,4.425 L18.478,15.564 C18.478,18.01 16.487,20 14.042,20 L9.157,20 C6.718,20 4.733,18.015 4.733,15.575 L4.733,14.633 C4.733,14.219 5.069,13.883 5.483,13.883 C5.897,13.883 6.233,14.219 6.233,14.633 L6.233,15.575 C6.233,17.187 7.545,18.5 9.157,18.5 L14.042,18.5 C15.661,18.5 16.978,17.184 16.978,15.564 L16.978,4.425 C16.978,2.813 15.665,1.5 14.053,1.5 L9.168,1.5 C7.55,1.5 6.233,2.816 6.233,4.434 L6.233,5.367 C6.233,5.781 5.897,6.117 5.483,6.117 C5.069,6.117 4.733,5.781 4.733,5.367 L4.733,4.434 C4.733,1.989 6.723,0 9.168,0 L14.053,0 Z M10.3923,6.553 L13.32125,9.46975 C13.3450062,9.49350625 13.3671777,9.51884734 13.3875914,9.54560044 L13.3213,9.469 C13.3612287,9.50836634 13.3961762,9.55184414 13.4257868,9.59843296 C13.4318468,9.61010737 13.438669,9.62151555 13.4451917,9.63311442 C13.4566029,9.65101613 13.4662591,9.6700434 13.4750815,9.68944319 C13.480071,9.7031962 13.48582,9.71688328 13.4911676,9.73076915 C13.4997074,9.74977474 13.5063094,9.76931306 13.5121001,9.78910914 C13.5154634,9.80470095 13.5194749,9.82025822 13.5229909,9.8360017 C13.5284509,9.85506905 13.5319637,9.87425098 13.5347286,9.89358117 C13.5347515,9.90236695 13.5358957,9.91159954 13.5368703,9.92088238 C13.5409073,9.9472797 13.5423,9.97357815 13.5423,10 L13.535,10.079 L13.5341493,10.1017257 C13.5339188,10.103423 13.5336827,10.1051185 13.5334408,10.1068122 L13.5423,10 C13.5423,10.0555105 13.5361529,10.1104764 13.5242059,10.1639208 C13.5194749,10.1797418 13.5154634,10.195299 13.5109738,10.2106529 C13.5063094,10.2306869 13.4997074,10.2502253 13.4923127,10.2694533 C13.48582,10.2831167 13.480071,10.2968038 13.4739348,10.3102778 C13.4662591,10.3299566 13.4566029,10.3489839 13.4461336,10.3675805 C13.438669,10.3784844 13.4318468,10.3898926 13.4247356,10.4010996 C13.4139611,10.4201734 13.4012842,10.4382836 13.3877787,10.4558338 C13.3785549,10.4662048 13.3699587,10.476822 13.3610846,10.4871944 C13.34907,10.50248 13.3355,10.517 13.3213,10.531 L10.3923,13.446 C10.2463,13.592 10.0543,13.665 9.8633,13.665 C9.6713,13.665 9.4783,13.592 9.3323,13.444 C9.0393,13.15 9.0413,12.676 9.3343,12.384 L10.975,10.75 L0.75,10.75 C0.336,10.75 -6.03961325e-14,10.414 -6.03961325e-14,10 C-6.03961325e-14,9.586 0.336,9.25 0.75,9.25 L10.975,9.25 L9.3343,7.615 C9.0413,7.323 9.0393,6.849 9.3323,6.555 C9.6253,6.261 10.0993,6.261 10.3923,6.553 Z"></path>
          </svg>
        </ButtonSvg>
      )}
    </nav>
  );
};
