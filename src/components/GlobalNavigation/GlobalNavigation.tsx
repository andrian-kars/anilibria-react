import { NavLink } from 'react-router-dom'
import s from './GlobalNavigation.module.scss'

type PropsType = {
  items: Array<PropsTypeItem>
}

type PropsTypeItem = {
  to: string
  text: string
  backgroundColor: string
}

export const GlobalNavigation: React.FC<PropsType> = ({ items }) => {
  console.log(items)

  return (
    <nav className={s.content}>
      <ul className={s.whrapper}>
        {items.map((el) => (
          <GlobalNavigationItem
            key={`${el.to}: ${el.text}`}
            to={el.to}
            text={el.text}
            backgroundColor={el.backgroundColor}
          />
        ))}
      </ul>
    </nav>
  )
}

const GlobalNavigationItem: React.FC<PropsTypeItem> = ({ to, text, backgroundColor }) => {
  return (
    <li className={s.item} style={{ backgroundColor }}>
      {to.includes('http') ? (
        <a href={to} target="_blank" rel="noreferrer">
          {text}
        </a>
      ) : (
        <NavLink to={to}>{text}</NavLink>
      )}
    </li>
  )
}
