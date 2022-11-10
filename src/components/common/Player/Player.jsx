import { PlayerConfigure } from './PlayerConfigure';
import s from './Player.module.scss';
import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Player = memo(({ host, hls }) => {
  const file = [];

  for (const key in hls) {
    switch (key) {
      case 'fhd':
        hls[key] && file.push(`[1080p]https://${host}${hls[key]}`);
        break;
      case 'hd':
        hls[key] && file.push(`[720p]https://${host}${hls[key]}`);
        break;
      case 'sd':
        hls[key] && file.push(`[480p]https://${host}${hls[key]}`);
        break;
      default:
        throw new Error('No hls were found');
    }
  }

  useEffect(() => {
    PlayerConfigure({
      id: 'anilibriaPlayer',
      file: file.reverse().join(','),
    });
  }, [file]);
  return <div className={s.player} id="anilibriaPlayer"></div>;
});

Player.propTypes = {
  host: PropTypes.string.isRequired,
  hls: PropTypes.shape().isRequired,
};
