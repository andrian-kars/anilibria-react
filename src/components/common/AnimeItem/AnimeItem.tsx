import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import { truncateString } from '../../../utils/truncateString'
import s from './AnimeItem.module.scss'
import { useState } from 'react'

type propsType = {
  title: string
  episodes: string
  description: string
  poster: string
  code: string
  descriptionLength?: number
  className?: string
  torrent?: number | boolean
  hide?: boolean
}

export const AnimeItem: React.FC<propsType> = ({
  title,
  episodes,
  description,
  poster,
  code,
  descriptionLength,
  className,
  torrent,
  hide,
}) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      className={cn(s.whrapper, className, !loaded && 'skeleton')}
      // TODO: change to public later
      style={{
        display: `${hide ? 'none' : 'flex'}`,
      }}
    >
      <img
        className={s.image}
        onLoad={() => setLoaded(true)}
        src={`https://www.anilibria.tv/${poster}`}
        alt={title}
      />
      <div className={s.textContent}>
        <NavLink className={s.content} to={`/release/${code}`}>
          <p className={s.title}>{title}</p>
          <p className={s.episodes}>Серия: {episodes}</p>
          <p className={s.description}>{truncateString(description, descriptionLength ?? 169)}</p>
        </NavLink>
      </div>
      <div className={s.hover} />
      {torrent && (
        <a
          className={s.download}
          href={`https://www.anilibria.tv//public/torrent/download.php?id=${torrent}`}
        >
          СКАЧАТЬ
        </a>
      )}
    </div>
  )
}
