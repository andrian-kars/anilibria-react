import s from './Footer.module.scss'

type propsType = {
  // href: string
}

export const Footer: React.FC<propsType> = () => {
  return (
    <footer className={s.content}>
      <div className={s.left}></div>
      <div className={s.center}></div>
      <div className={s.right}></div>
    </footer>
  )
}
