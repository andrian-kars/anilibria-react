import { useEffect } from 'react'
import { AnimeItem } from '../../components/common'
import { Paginator } from '../../components/common/Paginator/Paginator'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchCatalogStart, fetchListFromAdvancedSearch } from '../../store/reducers/CatalogSlice'
import { AdvancedSearch, FormType } from './AdvancedSearch'
import s from './Catalog.module.scss'

export const Catalog: React.FC = () => {
  const { animeListForCatalog, years, genres, seasons, isLoading, error } = useAppSelector(
    (state) => state.catalogReducer
  )
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

    dispatch(fetchListFromAdvancedSearch({ query: querry.join(' and '), order_by: type }))
    setSubmitting(false)
  }

  // TODO: when api updates, fix paginator
  const onPageChange = (pageNumber: number) => {
    console.log('page changed to', pageNumber)
    // alert('Paginator does not work, since API doest not provide such functionality')
  }

  // TODO: loading, error, no anime found
  return (
    <section className={s.content}>
      {years && genres && (
        <AdvancedSearch
          genres={genres}
          years={years}
          seasons={seasons}
          searchSubmit={searchSubmit}
        />
      )}
      <div className={s.animes}>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {animeListForCatalog?.length === 0 ? (
          <div>no anime found</div>
        ) : (
          !isLoading &&
          animeListForCatalog?.map((el) => (
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
          ))
        )}
      </div>
      {!isLoading && (
        <Paginator
          pageSize={12}
          totalUsersCount={600}
          onPageChange={onPageChange}
          currentPage={1}
        />
      )}
    </section>
  )
}
