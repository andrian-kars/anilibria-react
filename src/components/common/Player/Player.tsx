import { PlayerConfigure } from './PlayerConfigure'
import s from './Player.module.scss'
import { useEffect } from 'react'
import { hls } from '../../../types'

type propsType = {
  host: string
  hls: hls
}

export const Player: React.FC<propsType> = ({ host, hls }) => {
  const file: Array<string> = []

  for (const key in hls) {
    switch (key) {
      case 'sd':
        file.push(`[480p]https://${host}${hls[key]}`)
        break
      case 'hd':
        file.push(`[720p]https://${host}${hls[key]}`)
        break
      case 'fhd':
        file.push(`[480p]https://${host}${hls[key]}`)
        break
      default:
        throw new Error('No hls were found')
    }
  }

  useEffect(() => {
    PlayerConfigure({
      id: 'anilibriaPlayer',
      file: file.join(','),
    })
  }, [file])
  return <div className={s.player} id="anilibriaPlayer"></div>
}
