import { ANILIBRIA_STORAGE_URL } from 'src/constants';
import { anilibriaApiInstance } from './../config';

const paramFilter = {
  filter:
    'code,names,description,season.string,season.week_day,season.year,type.full_string,genres,team,player,torrents.episodes.string,posters,status,announce',
};

export const getTitle = (code) => {
  const paramsGetTitle = {
    code: code,
    ...paramFilter,
  };

  return anilibriaApiInstance
    .get('title', {
      params: paramsGetTitle,
    })
    .then((res) => {
      const {
        announce,
        code,
        description,
        genres,
        names,
        player,
        posters,
        season,
        status,
        team,
        torrents,
        type,
      } = res.data;
      return {
        announce,
        code,
        description,
        genres: genres.length ? genres : null,
        names: Object.values(names).filter((heading) => heading),
        player,
        poster: `${ANILIBRIA_STORAGE_URL}${
          posters.original.url || posters.medium.url || posters.small.url
        }`,
        time: { season: season.string, year: season.year, day: season.week_day },
        status,
        team: Object.entries(team)
          .filter((el) => el[1].length)
          .map((e) => ({ type: e[0], members: e[1] })),
        torrents,
        type: type.full_string,
      };
    });
};

export const getRandom = () =>
  anilibriaApiInstance
    .get('title/random', {
      params: { filter: 'code' },
    })
    .then((res) => {
      return res.data.code;
    });

const paramsAnimeListForSide = {
  filter: 'code,names.ru,description,torrents.episodes.string,posters,torrents.list[0].torrent_id',
};

export const getAnimeListForSide = (params) =>
  anilibriaApiInstance
    .get('title/updates', {
      params: { ...paramsAnimeListForSide, ...params },
    })
    .then((res) => {
      return res.data.list;
    });

const paramsSearchResults = {
  filter: 'code,names.ru',
  limit: 10,
};

export const getSearchResults = (searchValue) =>
  anilibriaApiInstance
    .get('title/search', {
      params: { ...paramsSearchResults, search: searchValue },
    })
    .then((res) => {
      return res.data.list;
    });
