import { memo, useState, useContext, useEffect } from 'react';
import { Player } from '../Player/Player';
import s from './PlayerList.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { ReleaseContext } from 'src/context';

export const PlayerList = memo(({ player, titleName, titleCode }) => {
  const playList = Object.values(player.playlist);

  const { recentAnimes, releaseActions } = useContext(ReleaseContext);
  const lastEpisode = recentAnimes.find((el) => el.titleName === titleName)?.choosenEpisode || 0;
  const [choosenEpisode, setChoosenEpisode] = useState(lastEpisode);

  useEffect(() => {
    if (recentAnimes[0].titleCode !== titleCode) {
      handleStorageUpdate(choosenEpisode);
    }
  });

  function handleEpisodeChange(newEpisode) {
    setChoosenEpisode(newEpisode);
    handleStorageUpdate(newEpisode);
  }

  function handleStorageUpdate(episode) {
    releaseActions.setReleaseToListTop({ titleName, choosenEpisode: episode, titleCode });
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
  titleCode: PropTypes.string.isRequired,
};
