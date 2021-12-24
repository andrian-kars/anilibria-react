import { youtubeType } from '../types'
import { instance } from './api'

const paramsYoutube = {
  limit: 12,
  filter: 'id,title,image,youtube_id',
  after: 364,
}

export const getYouTube = () => instance.get<youtubeType>('getYouTube', { params: paramsYoutube })
