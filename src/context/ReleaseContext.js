import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from 'src/hooks';
import { STORAGE_RECENT_ANIMES, STORAGE_FAVOURITE_ANIMES } from 'src/constants';

export const ReleaseContext = createContext(null);

export const ReleaseProvider = ({ children }) => {
  const [recentAnimes, setRecentAnimes] = useLocalStorage(STORAGE_RECENT_ANIMES, null);
  const [favouriteAnimes, setFavouriteAnimes] = useLocalStorage(STORAGE_FAVOURITE_ANIMES, null);

  const releaseActions = {
    setReleaseToListTop: ({ titleName, choosenEpisode, titleCode }) => {
      setRecentAnimes((prev) => {
        const prevFiltered = prev?.filter((el) => el.titleName !== titleName) || [];
        return [{ titleName, choosenEpisode, titleCode }, ...prevFiltered];
      });
    },
    setFavouriteToListTop: ({ titleName, titleCode }) => {
      setFavouriteAnimes((prev) => {
        const prevFiltered = prev?.filter((el) => el.titleName !== titleName) || [];
        return [{ titleName, titleCode }, ...prevFiltered];
      });
    },
    clearAnimes: (type) => {
      switch (type) {
        case STORAGE_RECENT_ANIMES:
          setRecentAnimes(null);
          break;
        case STORAGE_FAVOURITE_ANIMES:
          setFavouriteAnimes(null);
          break;
      }
    },
    deleteAnime: (type, code) => {
      const callback = (prev) => {
        const prevFiltered = prev.filter((el) => el.titleCode !== code);
        return prevFiltered.length ? prevFiltered : null;
      };
      switch (type) {
        case STORAGE_RECENT_ANIMES:
          setRecentAnimes(callback);
          break;
        case STORAGE_FAVOURITE_ANIMES:
          setFavouriteAnimes(callback);
          break;
      }
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
