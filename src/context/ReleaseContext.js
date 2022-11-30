import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from 'src/hooks';

export const ReleaseContext = createContext(null);

export const ReleaseProvider = ({ children }) => {
  const [recentAnimes, setRecentAnimes] = useLocalStorage('recentAnimes', []);

  const releaseActions = {
    setReleaseToListTop: ({ titleName, choosenEpisode, titleCode }) => {
      setRecentAnimes((prev) => {
        const prevFiltered = prev.filter((el) => el.titleName !== titleName);
        return [{ titleName, choosenEpisode, titleCode }, ...prevFiltered];
      });
    },
  };

  return (
    <ReleaseContext.Provider value={{ recentAnimes, releaseActions }}>
      {children}
    </ReleaseContext.Provider>
  );
};

ReleaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
