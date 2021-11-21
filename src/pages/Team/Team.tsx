import s from './Team.module.scss'

type propsType = {
  // href: string
}

export const Team: React.FC<propsType> = () => {
  return <section className={s.content}>Team Page</section>
}
