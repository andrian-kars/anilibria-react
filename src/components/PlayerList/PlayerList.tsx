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

  const [choosenEpisode, setChoosenEpisode] = useState(0)

  return (
    <section className={s.content}>
      {playList.length === 0 ? (
        <p className="additional-error">Серии добавляются</p>
      ) : (
        <>
          <div className={s.series}>
            {playList.map((el, i) => (
              <button
                className={cn(choosenEpisode === i && s.active)}
                key={i}
                onClick={() => {
                  setChoosenEpisode(i)
                }}
              >
                {el.serie}
              </button>
            ))}
          </div>
          <Player host={player.host} hls={playList[choosenEpisode].hls} />
        </>
      )}
    </section>
  )
}
