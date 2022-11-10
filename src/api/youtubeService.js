import { anilibriaApiInstance } from './config';

const paramsYoutube = {
  limit: 12,
  filter: 'id,title,image,youtube_id',
};

export const getYouTube = (after = 0) =>
  anilibriaApiInstance('getYouTube', { ...paramsYoutube, after: after });
