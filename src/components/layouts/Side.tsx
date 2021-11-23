import { AnimeItem } from '../common'
import s from './Layouts.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useEffect } from 'react'
import { fetchAnimeListForSide } from '../../store/reducers/LayoutsSlice'

export const Side: React.FC = () => {
  const { animeListForSide, isLoading, error } = useAppSelector((state) => state.layoutsReducer)
  const dispatch = useAppDispatch()

  console.log('LayoutsSide: render')

  useEffect(() => {
    !animeListForSide && dispatch(fetchAnimeListForSide())
  }, [dispatch, animeListForSide])

  // TODO: loading, error
  return (
    <aside className={s.side}>
      <div className={s.search}>Search</div>
      <div className={s.animes}>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {animeListForSide &&
          animeListForSide.map((el, i) => (
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
            />
          ))}
      </div>
    </aside>
  )
}
