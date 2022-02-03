import s from './Burger.module.scss'

type PropsType = {
  show: boolean
}

export const Burger: React.FC<PropsType> = ({ show }) => {
  return (
    <button className={!show ? s.hamburgerIcon : `${s.hamburgerIcon} ${s.active}`}>
      <span className={`${s.line} ${s.lineOne}`}></span>
      <span className={`${s.line} ${s.lineTwo}`}></span>
      <span className={`${s.line} ${s.lineThree}`}></span>
    </button>
  )
}
