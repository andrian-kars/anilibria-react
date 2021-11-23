import axios from 'axios'
import { typeSchedule } from '../types'

const instance = axios.create({
  baseURL: 'https://api.anilibria.tv/v2/',
})

export const getSchedule = () =>
  instance.get<typeSchedule>(
    'getSchedule?filter=code,names.ru,description,torrents.series.string,poster.url'
  )

export const getUpdates = () => {
  return instance
    .get(
      'getUpdates?filter=code,names.ru,description,torrents.series.string,poster.url,torrents.list[0].torrent_id'
    )
    .then((res) => {
      console.log('fff')

      console.log(res.data)
    })
}
