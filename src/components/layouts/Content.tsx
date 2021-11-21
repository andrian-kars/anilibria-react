import s from './Layouts.module.scss'

export const Content: React.FC = ({ children }) => {
  return <section className={s.content}>{children}</section>
}
