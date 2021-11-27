import { animeList, passedParamsAdvancedSearch } from '../types'
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

export const getGenres = () => instance.get<Array<string>>('getGenres')

const paramsListFromAdvancedSearch = {
  limit: 12,
  filter: 'code,names.ru,poster.url,torrents.series.string,description',
  sort_direction: 1,
}

export const getListFromAdvancedSearch = (passedParams: passedParamsAdvancedSearch) => {
  return instance.get<animeList>('advancedSearch', {
    params: { ...passedParams, ...paramsListFromAdvancedSearch },
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
