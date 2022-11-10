import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import s from './AnimeItem.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { truncateString } from 'src/helpers/truncateString';

export const AnimeItem = ({
  title,
  episodes,
  description = '',
  posters,
  code,
  className,
  torrent,
  onClick = null,
}) => {
  const [loaded, setLoaded] = useState(false);

  const poster = posters.original?.url || posters.medium?.url || posters.small?.url;
  return (
    <div className={cn(s.whrapper, className, !loaded && 'skeleton')}>
      <img
        className={s.image}
        onLoad={() => setLoaded(true)}
        src={`https://www.anilibria.tv/${poster}`}
        alt={title}
      />
      <div className={s.overlay}>
        <NavLink className={s.content} to={`/release/${code}`} onClick={onClick}>
          <p className={s.title}>{truncateString(title, 40)}</p>
          <p className={s.episodes}>Серия: {episodes}</p>
          <p className={s.description}>
            {description ? truncateString(description, 179) : 'Описание отсутствует'}
          </p>
        </NavLink>
        {torrent && (
          <a
            className={s.download}
            href={`https://www.anilibria.tv//public/torrent/download.php?id=${torrent}`}
          >
            СКАЧАТЬ
          </a>
        )}
      </div>
    </div>
  );
};

AnimeItem.propTypes = {
  title: PropTypes.string.isRequired,
  episodes: PropTypes.string.isRequired,
  description: PropTypes.string,
  posters: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
  className: PropTypes.string,
  torrent: PropTypes.number,
  onClick: PropTypes.func,
};
