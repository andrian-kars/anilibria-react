import { useEffect } from 'react'
import { AnimeItem } from '../../components/common'
import { Field, Formik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchNewAnimeListForCatalog } from '../../store/reducers/CatalogSlice'
import s from './Catalog.module.scss'
import { NavLink } from 'react-router-dom'

export const Catalog: React.FC = () => {
  const { animeListForCatalog, isLoading, error } = useAppSelector((state) => state.catalogReducer)
  const dispatch = useAppDispatch()

  console.log('Catalog: render')
  console.log(animeListForCatalog)

  useEffect(() => {
    !animeListForCatalog && dispatch(fetchNewAnimeListForCatalog())
  }, [dispatch, animeListForCatalog])

  const searchSubmit = (data: any) => {
    console.log(data)
  }
  // TODO: loading, error
  return (
    <section className={s.content}>
      <div className={s.search}>
        <Formik
          initialValues={{
            genre: null,
            year: null,
            season: null,
            type: 'new',
            releaseFinished: false,
          }}
          onSubmit={searchSubmit}
        >
          {/* {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => ( */}
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <div className={s.selects}>
                <Field as="select" name="genres">
                  <option value="null">All Users</option>
                  <option value="true">Followed</option>
                  <option value="false">Unfollowed</option>
                </Field>
                <Field as="select" name="years">
                  <option value="null">All Users</option>
                  <option value="true">Followed</option>
                  <option value="false">Unfollowed</option>
                </Field>
                <Field as="select" name="seasons">
                  <option value="null">All Users</option>
                  <option value="true">Followed</option>
                  <option value="false">Unfollowed</option>
                </Field>
              </div>
              <div className={s.searchBottom}>
                <div className={s.submits}>
                  <button type="submit" disabled={isSubmitting}>
                    New
                  </button>
                  <button type="submit" disabled={isSubmitting}>
                    Show
                  </button>
                  <button type="submit" disabled={isSubmitting}>
                    Release over
                  </button>
                </div>
                <NavLink className={s.alphabet} to={'/pages/alphabet'}>
                  АЛФАВИТНЫЙ УКАЗАТЕЛЬ
                </NavLink>
              </div>
            </form>
          )}
        </Formik>
      </div>
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
