import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import { truncateString } from '../../../utils/truncateString'
import s from './AnimeItem.module.scss'

type propsType = {
  title: string
  episodes: string
  description: string
  poster: string
  code: string
  descriptionLength?: number
  className?: string
}

export const AnimeItem: React.FC<propsType> = ({
  title,
  episodes,
  description,
  poster,
  code,
  descriptionLength,
  className,
}) => {
  return (
    <div
      className={cn(s.whrapper, className)}
      // TODO: change to public later
      style={{ backgroundImage: `url(https://www.anilibria.tv/${poster})` }}
    >
      <NavLink className={s.content} to={`/release/${code}`}>
        <p className={s.title}>{title}</p>
        <p className={s.episodes}>Серия: {episodes}</p>
        <p className={s.description}>{truncateString(description, descriptionLength ?? 169)}</p>
      </NavLink>
      <div className={s.hover} />
    </div>
  )
}
