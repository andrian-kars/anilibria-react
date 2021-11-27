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

export const getYears = () => instance.get<Array<number>>('getYears')

const paramsGenres = {
  sorting_type: 1,
}

export const getGenres = () => instance.get<Array<string>>('getGenres', { params: paramsGenres })

const paramsListFromAdvancedSearch = {
  limit: 12,
  filter: 'code,names.ru,poster.url,torrents.series.string,description',
  order_by: 'updated',
  sort_direction: 1,
}

export const getListFromAdvancedSearch = (query: string) => {
  console.log({ query, ...paramsListFromAdvancedSearch })

  return instance.get<animeList>('advancedSearch', {
    params: { query, ...paramsListFromAdvancedSearch },
    paramsSerializer: (params) => {
      // Sample implementation of query string building
      let result = ''
      Object.keys(params).forEach((key) => {
        result += `${key}=${encodeURIComponent(params[key])}&`
      })
      return result.substr(0, result.length - 1)
    },
  })
}
