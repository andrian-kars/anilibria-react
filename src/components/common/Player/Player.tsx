import { PlayerConfigure } from './PlayerConfigure'
import s from './Player.module.scss'
import { useEffect } from 'react'
import { hls } from 'src/types'

type propsType = {
  host: string
  hls: hls
}

export const Player: React.FC<propsType> = ({ host, hls }) => {
  const file: Array<string> = []

  for (const key in hls) {
    switch (key) {
      case 'sd':
        hls[key] && file.push(`[480p]https://${host}${hls[key]}`)
        break
      case 'hd':
        hls[key] && file.push(`[720p]https://${host}${hls[key]}`)
        break
      case 'fhd':
        hls[key] && file.push(`[1080p]https://${host}${hls[key]}`)
        break
      default:
        throw new Error('No hls were found')
    }
  }

  useEffect(() => {
    PlayerConfigure({
      id: 'anilibriaPlayer',
      file: file.reverse().join(','),
    })
  }, [file])
  return <div className={s.player} id="anilibriaPlayer"></div>
}
