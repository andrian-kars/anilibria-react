import cn from 'classnames'
import { useEffect, useState } from 'react'
import { AnimeItem, PaginatorKostyl } from '../../components/common'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchCatalogStart, fetchListFromAdvancedSearch } from '../../store/reducers/CatalogSlice'
import { AdvancedSearch, FormType } from './AdvancedSearch'
import s from './Catalog.module.scss'

export const Catalog: React.FC = () => {
  const { animeListForCatalog, years, genres, seasons, isLoading, filter, error } = useAppSelector(
    (state) => state.catalogReducer
  )
  const [page, setPage] = useState(1)
  const preLoad = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const dispatch = useAppDispatch()

  console.log('Catalog: render')

  useEffect(() => {
    !animeListForCatalog && !years && !genres && dispatch(fetchCatalogStart())
  }, [dispatch, animeListForCatalog, years, genres])

  const searchSubmit = (
    { genres, years, seasons, type, releaseFinished }: FormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setSubmitting(true)
    const querry = []

    genres.length > 0 &&
      querry.push(`("${genres.map((el) => `${el.value}`).join('", "')}") in {genres}`)
    years.length > 0 && querry.push(`{season.year} in (${years.map((el) => `${el.value}`)})`)
    seasons.length > 0 && querry.push(`{season.code} in (${seasons.map((el) => `${el.value}`)})`)
    // don't see why we should pass 1 after else
    releaseFinished ? querry.push('{status.code} == 2') : querry.push('{updated}')
    setPage(1)
    dispatch(
      fetchListFromAdvancedSearch({
        query: querry.join(' and '),
        order_by: type,
      })
    )
    setSubmitting(false)
  }

  const onPageChange = (pageNumber: number) => {
    setPage(pageNumber)
    const after = pageNumber === 1 ? 0 : (pageNumber - 1) * 12
    // notice, that when order_by favotires, the number is shifted from 0 to 3
    const params = filter
      ? { ...filter, after: after === 0 ? 0 : after }
      : { query: '{updated}', order_by: 'updated', after }
    dispatch(fetchListFromAdvancedSearch(params))
  }

  // TODO: error
  return (
    <section className={s.content}>
      {years && genres ? (
        <AdvancedSearch
          genres={genres}
          years={years}
          seasons={seasons}
          searchSubmit={searchSubmit}
        />
      ) : (
        <div className={cn(s.search, 'skeleton')} />
      )}
      {animeListForCatalog?.length === 0 ? (
        <p className="additional-error">Ни одного аниме не было найдено</p>
      ) : (
        <div className={s.animes}>
          {isLoading &&
            preLoad.map((el) => <div key={el} className={cn(s.animeItem, 'skeleton')} />)}
          {error && <h1>{error}</h1>}
          {!isLoading &&
            animeListForCatalog?.map((el, i) =>
              i === 12 ? null : (
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
              )
            )}
        </div>
      )}
      {animeListForCatalog && animeListForCatalog.length !== 0 && (
        <PaginatorKostyl
          canGoNext={animeListForCatalog?.length === 13}
          onPageChange={onPageChange}
          currentPage={page}
        />
      )}
    </section>
  )
}
