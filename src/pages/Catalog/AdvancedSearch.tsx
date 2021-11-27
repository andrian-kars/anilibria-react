import { Field, Form, Formik } from 'formik'
import { NavLink } from 'react-router-dom'
import Select from 'react-select'
import { selectValues } from '../../types'
import { customSelectStyles } from '../../styles/custom-select'
import s from './Catalog.module.scss'

export type FormType = {
  genres: selectValues
  years: selectValues
  seasons: selectValues
  type: 'updated' | 'in_favorites'
  releaseFinished: boolean
}

type PropsType = {
  genres: selectValues
  years: selectValues
  seasons: selectValues
  searchSubmit: (
    FormType: FormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => void
}

export const AdvancedSearch: React.FC<PropsType> = ({ genres, years, seasons, searchSubmit }) => {
  return (
    <div className={s.search}>
      <Formik
        initialValues={{
          genres: [],
          years: [],
          seasons: [],
          type: 'updated',
          releaseFinished: false,
        }}
        onSubmit={searchSubmit}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form>
            <SVGs />
            <div className={s.selects}>
              <Field
                className={s.select}
                styles={customSelectStyles}
                as={Select}
                name="genres"
                options={genres}
                placeholder="Выбрать жанры"
                isMulti={true}
                onChange={(value: selectValues) => setFieldValue('genres', value)}
              />
              <Field
                className={s.select}
                styles={customSelectStyles}
                as={Select}
                name="years"
                options={years}
                placeholder="Год"
                isMulti={true}
                onChange={(value: selectValues) => setFieldValue('years', value)}
              />
              <Field
                className={s.select}
                styles={customSelectStyles}
                as={Select}
                name="seasons"
                options={seasons}
                placeholder="Сезон"
                isMulti={true}
                onChange={(value: selectValues) => setFieldValue('seasons', value)}
              />
            </div>
            <div className={s.searchBottom}>
              <div className={s.submits}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() =>
                    setFieldValue('type', values.type === 'updated' ? 'in_favorites' : 'updated')
                  }
                >
                  {values.type === 'updated' ? 'Новое' : 'Популярное'}
                </button>
                <button type="submit" disabled={isSubmitting}>
                  Показать
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => setFieldValue('releaseFinished', !values.releaseFinished)}
                >
                  <svg>
                    <use href={`#${values.releaseFinished ? 'checked' : 'unchecked'}`} />
                  </svg>
                  <span>
                    Релиз<>&#8209;</>завершен
                  </span>
                </button>
              </div>
              <div className={s.alphabet}>
                <NavLink to={'/pages/alphabet'}>АЛФАВИТНЫЙ УКАЗАТЕЛЬ</NavLink>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const SVGs: React.FC = () => {
  return (
    <svg display="none">
      <symbol
        id="checked"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 28 28"
      >
        <path d="M10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591zm-5.041-15c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
      </symbol>
      <symbol
        id="unchecked"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 28 28"
      >
        <path d="M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
      </symbol>
    </svg>
  )
}
