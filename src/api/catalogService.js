import { anilibriaApiInstance } from './config';

export const getYears = () => anilibriaApiInstance('getYears');

export const getGenres = () => anilibriaApiInstance('getGenres');

const paramsListFromAdvancedSearch = {
  limit: 12,
  filter: 'code,names.ru,posters,torrents.series.string,description',
  sort_direction: 1,
};

export const getListFromAdvancedSearch = (passedParams) =>
  anilibriaApiInstance('advancedSearch', {
    ...passedParams,
    ...paramsListFromAdvancedSearch,
  });
