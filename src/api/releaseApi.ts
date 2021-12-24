import { animeItem } from '../types'
import { instance } from './api'

const paramFilter = {
  filter:
    'code,names,description,season.string,season.week_day,season.year,type.full_string,genres,team,player,torrents.series.string,poster.url,status,announce',
}

export const getTitle = (code: string) => {
  const paramsGetTitle = {
    code: code,
    ...paramFilter,
  }

  return instance.get<animeItem>('getTitle', { params: paramsGetTitle })
}

export const getRandom = () => {
  return instance.get<animeItem>('getRandomTitle', { params: paramFilter })
}
