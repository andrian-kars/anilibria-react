import s from './Header.module.scss'

type propsType = {
  href: string
}

export const Header: React.FC<propsType> = ({ href }) => {
  return (
    <header className={s.content}>
      <div className={s.logo} />
      <div className={s.adLink}>
        <a href={href} target="_blank" rel="noreferrer">
          {' '}
        </a>
        <div className={s.title}>
          Вы можете отключить рекламу в <br /> личном кабинете
        </div>
      </div>
    </header>
  )
}
