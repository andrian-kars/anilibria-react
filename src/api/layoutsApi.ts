import { animeList } from '../types'
import { instance } from './api'

const paramsAnimeListForSide = {
  filter: 'code,names.ru,description,torrents.series.string,poster.url,torrents.list[0].torrent_id',
}

export const getAnimeListForSide = () =>
  instance.get<animeList>('getUpdates', { params: paramsAnimeListForSide })
