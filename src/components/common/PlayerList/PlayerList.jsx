import { memo, useState } from 'react';
import { Player } from '../Player/Player';
import s from './PlayerList.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useLocalStorage, useEffectOnce } from 'src/hooks';

export const PlayerList = memo(({ player, titleName }) => {
  const playList = Object.values(player.playlist);

  const [recentAnimes, setRecentAnimes] = useLocalStorage('recentAnimes', []);
  const lastEpisode = recentAnimes.find((el) => el.titleName === titleName)?.choosenEpisode || 0;
  const [choosenEpisode, setChoosenEpisode] = useState(lastEpisode);

  useEffectOnce(() => {
    handleStorageUpdate(choosenEpisode);
  });

  function handleEpisodeChange(newEpisode) {
    setChoosenEpisode(newEpisode);
    handleStorageUpdate(newEpisode);
  }

  function handleStorageUpdate(episode) {
    setRecentAnimes((prev) => {
      const prevFiltered = prev.filter((el) => el.titleName !== titleName);
      return [...prevFiltered, { titleName, choosenEpisode: episode }];
    });
  }

  return (
    <section className={s.content}>
      {playList.length === 0 ? (
        <p className="additional-error">Серии добавляются</p>
      ) : (
        <>
          <div className={s.series}>
            {playList.map((el, i) => (
              <button
                className={cn(choosenEpisode === i && s.active)}
                key={i}
                onClick={() => handleEpisodeChange(i)}
              >
                {el.serie}
              </button>
            ))}
          </div>
          <Player host={player.host} hls={playList[choosenEpisode].hls} />
        </>
      )}
    </section>
  );
});

PlayerList.propTypes = {
  player: PropTypes.shape().isRequired,
  titleName: PropTypes.string.isRequired,
};
