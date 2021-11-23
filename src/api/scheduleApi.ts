import { typeSchedule } from '../types'
import { instance } from './api'

const paramsSchedule = {
  filter: 'code,names.ru,description,torrents.series.string,poster.url',
}

export const getSchedule = () =>
  instance.get<typeSchedule>('getSchedule', { params: paramsSchedule })
