import s from './Profile.module.scss'

type propsType = {
  // href: string
}

export const Profile: React.FC<propsType> = () => {
  return <section className={s.content}>Profile Page</section>
}
