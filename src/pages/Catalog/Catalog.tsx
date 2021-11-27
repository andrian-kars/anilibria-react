import { useEffect } from 'react'
import { AnimeItem } from '../../components/common'
import { Field, Formik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchCatalogStart, fetchListFromAdvancedSearch } from '../../store/reducers/CatalogSlice'
import s from './Catalog.module.scss'
import { NavLink } from 'react-router-dom'

export const Catalog: React.FC = () => {
  const { animeListForCatalog, years, genres, seasons, isLoading, error } = useAppSelector(
    (state) => state.catalogReducer
  )
  const dispatch = useAppDispatch()

  console.log('Catalog: render')
  console.log(animeListForCatalog, years, genres)

  useEffect(() => {
    !animeListForCatalog && !years && !genres && dispatch(fetchCatalogStart())
  }, [dispatch, animeListForCatalog, years, genres])

  const searchSubmit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setSubmitting(true)
    console.log(Object.values(values))
    const arrValues = Object.values(values)
    const query = `("${arrValues[0]}") in {genres} and {season.year} == ${arrValues[1]} and {season.code} == ${arrValues[2]}`
    dispatch(fetchListFromAdvancedSearch(query))
    setSubmitting(false)
  }

  // TODO: loading, error
  return (
    <section className={s.content}>
      {years && genres && (
        <div className={s.search}>
          <Formik
            initialValues={{
              genres: genres[0],
              years: years[0],
              seasons: seasons.indexOf(seasons[0]) + 1,
              type: 'new',
              releaseFinished: false,
            }}
            onSubmit={searchSubmit}
          >
            {({ values, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <div className={s.selects}>
                  <Field as="select" name="genres">
                    {genres.map((el) => (
                      <option value={el} key={`Catalog genre: ${el}`}>
                        {el}
                      </option>
                    ))}
                  </Field>
                  <Field as="select" name="years">
                    {years.map((el) => (
                      <option value={el} key={`Catalog year: ${el}`}>
                        {el}
                      </option>
                    ))}
                  </Field>
                  <Field as="select" name="seasons">
                    {seasons.map((el, i) => (
                      <option value={i + 1} key={`Catalog season: ${el}`}>
                        {el}
                      </option>
                    ))}
                  </Field>
                </div>
                <div className={s.searchBottom}>
                  <div className={s.submits}>
                    <button type="submit" disabled={isSubmitting}>
                      New
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                      Показать
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                      Release over
                    </button>
                  </div>
                  <div className={s.alphabet}>
                    <NavLink to={'/pages/alphabet'}>АЛФАВИТНЫЙ УКАЗАТЕЛЬ</NavLink>
                  </div>
                </div>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </form>
            )}
          </Formik>
        </div>
      )}
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

type FormType = {
  genres: string
  years: number
  seasons: number
  type: 'new' | 'popular'
  releaseFinished: boolean
}
