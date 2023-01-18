import { anilibriaApiInstance } from './../config';

export const getYears = () =>
  anilibriaApiInstance.get('years').then((res) => {
    return res.data;
  });

export const getGenres = () =>
  anilibriaApiInstance.get('genres').then((res) => {
    return res.data;
  });

const paramsListFromAdvancedSearch = {
  limit: 12,
  filter: 'code,names.ru,posters,torrents.episodes.string,description',
  sort_direction: 1,
};

export const getListFromAdvancedSearch = (passedParams) =>
  anilibriaApiInstance
    .get('title/search/advanced', {
      params: {
        // TODO: API needs to be updated to get rid of simple_query
        simple_query: passedParams.query,
        ...passedParams,
        ...paramsListFromAdvancedSearch,
      },
    })
    .then((res) => {
      return res.data.list;
    });
