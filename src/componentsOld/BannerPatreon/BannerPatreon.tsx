import cn from 'classnames'
import { useState } from 'react'
import s from './BannerPatreon.module.scss'

type PropsType = {
  href: string
}

export const BannerPatreon: React.FC<PropsType> = ({ href }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <a className={cn(s.link, !loaded && 'skeleton')} href={href} target="_blank" rel="noreferrer">
      <img
        onLoad={() => setLoaded(true)}
        src="public/assets/images/patreon-banner.jpg"
        alt="patreon-banner"
      />
    </a>
  )
}
