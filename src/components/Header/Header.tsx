import { Burger, Heading } from 'src/components/common'
import logo from 'public/assets/images/logo.png'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux'
import { setShowMenu, setShowSide } from 'src/store/reducers/LayoutsSlice'

export const Header: React.FC = () => {
  console.log('Header render')

  const { showMenu, showSide } = useAppSelector((state) => state.layoutsReducer)

  const dispatch = useAppDispatch()

  return (
    <header id="top" className={s.header}>
      <div className={s.whrapperLeftHead}>
        <NavLink to={'/'} className={s.whrapperSocial}>
          <img className={s.logo} src={logo} alt="logo" />
          <Heading type="h1" text="Anilibria" />
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
