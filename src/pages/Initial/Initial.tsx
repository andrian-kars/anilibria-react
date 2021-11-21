import s from './Initial.module.scss'

type propsType = {
  // href: string
}

export const Initial: React.FC<propsType> = () => {
  return <section className={s.content}>Initial Page</section>
}
