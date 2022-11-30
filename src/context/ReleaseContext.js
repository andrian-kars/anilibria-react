import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from 'src/hooks';

export const ReleaseContext = createContext(null);

export const ReleaseProvider = ({ children }) => {
  const [recentAnimes, setRecentAnimes] = useLocalStorage('recentAnimes', []);
  const [favouriteAnimes, setFavouriteAnimes] = useLocalStorage('favouriteAnimes', []);

  const releaseActions = {
    setReleaseToListTop: ({ titleName, choosenEpisode, titleCode }) => {
      setRecentAnimes((prev) => {
        const prevFiltered = prev.filter((el) => el.titleName !== titleName);
        return [{ titleName, choosenEpisode, titleCode }, ...prevFiltered];
      });
    },
    setFavouriteToListTop: ({ titleName, titleCode }) => {
      setFavouriteAnimes((prev) => {
        const prevFiltered = prev.filter((el) => el.titleName !== titleName);
        return [{ titleName, titleCode }, ...prevFiltered];
      });
    },
    removeFavourite: (titleCode) => {
      setFavouriteAnimes((prev) => prev.filter((el) => el.titleCode !== titleCode));
    },
  };

  return (
    <ReleaseContext.Provider value={{ recentAnimes, favouriteAnimes, releaseActions }}>
      {children}
    </ReleaseContext.Provider>
  );
};

ReleaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
