import { animeList } from '../types'
import { instance } from './api'

const paramsNewAnimeListForCatalog = {
  query: '{updated}',
  limit: 12,
  filter: 'code,names.ru,poster.url,torrents.series.string,description',
  order_by: 'updated',
  sort_direction: 1,
}

export const getNewAnimeListForCatalog = () =>
  instance.get<animeList>('advancedSearch', { params: paramsNewAnimeListForCatalog })
