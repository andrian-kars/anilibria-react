import { typeSchedule } from '../types'
import { instance } from './api'

export const getTitle = (code: string) => {
  const paramsGetTitlte = {
    code: code,
    filter:
      'code,names,description,season.string,season.week_day,season.year,type.full_string,genres,team,player,torrents.series.string,poster.url',
  }

  return instance.get<typeSchedule>('getTitle', { params: paramsGetTitlte })
}
