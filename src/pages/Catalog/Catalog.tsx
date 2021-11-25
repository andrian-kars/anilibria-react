import { useEffect } from 'react'
import { AnimeItem } from '../../components/common'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchNewAnimeListForCatalog } from '../../store/reducers/CatalogSlice'
import s from './Catalog.module.scss'

export const Catalog: React.FC = () => {
  const { animeListForCatalog, isLoading, error } = useAppSelector((state) => state.catalogReducer)
  const dispatch = useAppDispatch()

  console.log('Catalog: render')
  console.log(animeListForCatalog)

  useEffect(() => {
    !animeListForCatalog && dispatch(fetchNewAnimeListForCatalog())
  }, [dispatch, animeListForCatalog])

  // TODO: loading, error
  return (
    <section className={s.content}>
      <div className={s.search}></div>
      <div className={s.animes}>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {animeListForCatalog?.map((el) => (
          <AnimeItem
            title={el.names.ru}
            episodes={el.torrents.series.string}
            description={el.description}
            poster={el.poster.url}
            descriptionLength={199}
            code={el.code}
            className={s.animeItem}
            key={`Catalog:${el.code}`}
          />
        ))}
      </div>
    </section>
  )
}
