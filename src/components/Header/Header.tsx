import { Burger, Heading } from 'src/components/common'
import logo from 'public/assets/images/logo.png'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux'
import { setShowMenu } from 'src/store/reducers/LayoutsSlice'

export const Header: React.FC = () => {
  console.log('Header render')

  const showMenu = useAppSelector((state) => state.layoutsReducer.showMenu)

  const dispatch = useAppDispatch()

  const onSetShowMenu = () => {
    dispatch(setShowMenu())
  }

  return (
    <header id="top" className={s.header}>
      <div className={s.whrapperLeftHead}>
        <NavLink to={'/'} className={s.whrapperSocial}>
          <img className={s.logo} src={logo} alt="logo" />
          <Heading type="h1" text="Anilibria" />
        </NavLink>
        <div role="link" tabIndex={0} onClick={onSetShowMenu} className={s.burgerWhrapper}>
          <Burger show={!showMenu} />
        </div>
      </div>
    </header>
  )
}
