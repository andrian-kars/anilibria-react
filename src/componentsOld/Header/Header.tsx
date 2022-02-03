import { useState } from 'react'
import cn from 'classnames'
import s from './Header.module.scss'

type propsType = {
  href?: string
  adImgUrl?: string
  defaultImgUrl: string
  width?: number
  height?: number
  top?: number
  marginLeft?: number
  adOff: boolean
}

export const Header: React.FC<propsType> = ({
  href,
  adImgUrl,
  defaultImgUrl,
  width,
  height,
  top,
  marginLeft,
  adOff,
}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <header className={cn(s.content, !loaded && 'skeleton')}>
      <img
        onLoad={() => setLoaded(true)}
        src={adOff ? defaultImgUrl : adImgUrl}
        alt="anilibria-header"
      />
      {!adOff && (
        <>
          <div className={s.logo} />
          <div
            className={s.adLink}
            style={{
              width,
              height,
              top,
              marginLeft,
            }}
          >
            <a href={href} target="_blank" rel="noreferrer" />
            <div
              className={s.title}
              style={{
                left: `${(width ?? 250) + 8}px`,
                top: `${(height ?? 70) / 2}px`,
              }}
            >
              Вы можете отключить рекламу в личном кабинете
            </div>
          </div>
        </>
      )}
    </header>
  )
}
