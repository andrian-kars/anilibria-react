import { anilibriaApiInstance1 } from './config';

const paramsYoutube = {
  limit: 12,
  filter: 'id,title,image,youtube_id',
};

export const getYouTube = (after = 0) =>
  anilibriaApiInstance1('getYouTube', { ...paramsYoutube, after: after });
