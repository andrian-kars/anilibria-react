import s from './Layouts.module.scss'

export const Side: React.FC = ({ children }) => {
  return <aside className={s.side}>{children}</aside>
}
