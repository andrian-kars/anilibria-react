import { memo, useState } from 'react';
import { Player } from '../Player/Player';
import s from './PlayerList.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

export const PlayerList = memo(({ player }) => {
  const playList = Object.values(player.playlist);

  const [choosenEpisode, setChoosenEpisode] = useState(0);

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
                onClick={() => {
                  setChoosenEpisode(i);
                }}
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
};
