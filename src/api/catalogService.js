import { anilibriaApiInstance1 } from './config';

export const getYears = () => anilibriaApiInstance1('getYears');

export const getGenres = () => anilibriaApiInstance1('getGenres');

const paramsListFromAdvancedSearch = {
  limit: 12,
  filter: 'code,names.ru,posters,torrents.series.string,description',
  sort_direction: 1,
};

export const getListFromAdvancedSearch = (passedParams) =>
  anilibriaApiInstance1('advancedSearch', {
    ...passedParams,
    ...paramsListFromAdvancedSearch,
  });
