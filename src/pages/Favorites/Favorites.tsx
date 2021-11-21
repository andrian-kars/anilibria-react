import s from './Favorites.module.scss'

type propsType = {
  // href: string
}

export const Favorites: React.FC<propsType> = () => {
  return <section className={s.content}>Favorites Page</section>
}
