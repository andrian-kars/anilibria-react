import { anilibriaApiInstance } from './../config';

const paramsYoutube = {
  limit: 12,
  filter: 'id,title,preview,youtube_id',
};

export const getYouTube = (after = 0) =>
  anilibriaApiInstance
    .get('youtube', {
      params: { ...paramsYoutube, after: after > 0 ? after : null },
    })
    .then((res) => {
      return res.data.list;
    });
