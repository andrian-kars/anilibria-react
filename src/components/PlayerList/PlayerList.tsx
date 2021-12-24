import { useState } from 'react'
import { player } from '../../types'
import { Player } from '../common/Player/Player'
import s from './PlayerList.module.scss'
import cn from 'classnames'

type propsType = {
  player: player
}

export const PlayerList: React.FC<propsType> = ({ player: player }) => {
  const playList = Object.values(player.playlist)

  const [choosenEpisode, setChoosenEpisode] = useState(1)

  return (
    <section className={s.content}>
      <div className={s.series}>
        {playList.map((el) => (
          <button
            className={cn(choosenEpisode === el.serie && s.active)}
            key={el.serie}
            onClick={() => {
              setChoosenEpisode(el.serie)
            }}
          >
            {el.serie}
          </button>
        ))}
      </div>
      <Player host={player.host} hls={playList[choosenEpisode - 1].hls} />
    </section>
  )
}
