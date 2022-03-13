import { Burger, Heading } from 'src/components/common'
import logo from 'public/assets/images/logo.png'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux'
import { fetchSearchResults, setShowMenu, setShowSide } from 'src/store/reducers/LayoutsSlice'
import { useState } from 'react'
import { debounce } from 'src/utils/debounce'

export const Header: React.FC = () => {
  console.log('Header render')

  const [showResults, setShowResult] = useState(false)

  const { showMenu, showSide, searchResults } = useAppSelector((state) => state.layoutsReducer)
  const dispatch = useAppDispatch()

  function onFetchSearchResults(value) {
    dispatch(fetchSearchResults(value))
  }
  onFetchSearchResults = debounce(onFetchSearchResults, 180)

  return (
    <header id="top" className={s.header}>
      <div className={s.whrapperLeftHead}>
        <NavLink to={'/'} className={s.whrapperSocial}>
          <img className={s.logo} src={logo} alt="logo" />
          <Heading type="h1" text="Anilibria" className={s.heading} />
        </NavLink>
        <div
          role="link"
          tabIndex={0}
          onClick={() => {
            dispatch(setShowMenu())
          }}
          className={s.burgerNav}
        >
          <Burger show={!showMenu} />
        </div>
      </div>
      <div
        className={s.search}
        onBlur={() => {
          setTimeout(() => {
            setShowResult(false)
          }, 180)
        }}
      >
        <input
          onFocus={() => {
            setShowResult(true)
          }}
          onChange={(e) => {
            const value = e.target.value

            if (value.length > 2) {
              onFetchSearchResults(value)
            }
          }}
          type="text"
          placeholder="Найти по названию"
          title="Поиск от 3 символов"
        />
        {showResults && (
          <ul>
            {searchResults === null && <span>Поиск от 3 символов</span>}
            {searchResults?.length === 0 && <span>Ничего не найдено</span>}
            {searchResults?.map((el) => (
              <li key={el.names.ru}>
                <NavLink className={s.searchLink} to={`/release/${el.code}`}>
                  {el.names.ru}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
        <svg className="svg-icon" viewBox="0 0 20 20">
          <path
            d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
								c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
								c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
								s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"
          ></path>
        </svg>
      </div>
      <div className={s.whrapperRightHead}>
        <div
          role="link"
          tabIndex={0}
          onClick={() => {
            dispatch(setShowSide())
          }}
          className={s.burgerSide}
        >
          <Burger show={!showSide} />
        </div>
      </div>
    </header>
  )
}
