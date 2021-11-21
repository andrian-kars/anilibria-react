import s from './Catalog.module.scss'

type propsType = {
  // href: string
}

export const Catalog: React.FC<propsType> = () => {
  return <section className={s.content}>Catalog Page</section>
}
