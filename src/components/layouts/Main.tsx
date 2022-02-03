import s from './Layouts.module.scss'

export const Main: React.FC = ({ children }) => {
  return (
    <main className={s.main}>
      <div className={s.container}>{children}</div>
    </main>
  )
}
