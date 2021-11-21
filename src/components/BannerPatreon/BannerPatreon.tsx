import s from './BannerPatreon.module.scss'

type PropsType = {
  href: string
}

export const BannerPatreon: React.FC<PropsType> = ({ href }) => {
  return <a className={s.link} href={href} target="_blank" rel="noreferrer" />
}
