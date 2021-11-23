import axios from 'axios'
import { typeSchedule } from '../types'

export const instance = axios.create({
  baseURL: 'https://api.anilibria.tv/v2/',
})

export const getSchedule = () =>
  instance.get<typeSchedule>(
    'getSchedule?filter=code,names.ru,description,torrents.series.string,poster.url'
  )
