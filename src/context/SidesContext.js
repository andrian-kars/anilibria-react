import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SidesContext = createContext(null);

export const SidesProvider = ({ children }) => {
  const [sides, setSides] = useState({ isMobileSidesActive: false });

  const sidesActions = {
    triggerMobileSidesActive: (isActive) => {
      setSides((prev) => ({ ...prev, isMobileSidesActive: isActive }));
    },
  };

  return <SidesContext.Provider value={{ sides, sidesActions }}>{children}</SidesContext.Provider>;
};

SidesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
