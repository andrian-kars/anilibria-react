import s from './Layouts.module.scss'

type propsType = {
  // href: string
}

export const Side: React.FC<propsType> = () => {
  return <aside className={s.side}></aside>
}
