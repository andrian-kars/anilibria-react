import { AnimeItem } from '../common'
import s from './Layouts.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useEffect } from 'react'
import { fetchAnimeListForSide } from '../../store/reducers/LayoutsSlice'
import { NavLink, useLocation } from 'react-router-dom'
import cn from 'classnames'

export const Side: React.FC = () => {
  const path = useLocation().pathname
  const listCount = path === '/' ? 4 : 5
  const preLoad = [0, 1, 2, 3, 4]

  const { animeListForSide, isLoading, error } = useAppSelector((state) => state.layoutsReducer)

  const dispatch = useAppDispatch()

  console.log('LayoutsSide: render')

  useEffect(() => {
    !animeListForSide && dispatch(fetchAnimeListForSide())
  }, [dispatch, animeListForSide])

  // TODO: error
  return (
    <aside className={s.side}>
      <div className={s.search}>
        <NavLink to="/release">Release</NavLink>
      </div>
      <div className={s.animes}>
        {isLoading && preLoad.map((el) => <div key={el} className={cn(s.animeItem, 'skeleton')} />)}
        {error && <h1>{error}</h1>}
        {animeListForSide?.map((el, i) => (
          <AnimeItem
            title={el.names.ru}
            episodes={el.torrents.series.string}
            description={el.description}
            poster={el.poster.url}
            descriptionLength={179}
            code={el.code}
            className={s.animeItem}
            torrent={el.torrents.list[0].torrent_id || false}
            key={`side ${i}:${el.code}`}
            hide={listCount === i}
          />
        ))}
      </div>
    </aside>
  )
}
