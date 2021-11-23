import { animeList } from '../types'
import { instance } from './api'

export const getAnimeListForSide = () =>
  instance.get<animeList>(
    'getUpdates?filter=code,names.ru,description,torrents.series.string,poster.url,torrents.list[0].torrent_id'
  )
