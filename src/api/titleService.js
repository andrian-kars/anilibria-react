import { anilibriaApiInstance1 } from './config';

const daysInAWeek = [
  'каждый понедельник',
  'каждый вторник',
  'каждую среду',
  'каждый четверг',
  'каждую пятницу',
  'каждую субботу',
  'каждое воскресенье',
];

const paramFilter = {
  filter:
    'code,names,description,season.string,season.week_day,season.year,type.full_string,genres,team,player,torrents.series.string,posters,status,announce',
};

export const getTitle = (code) => {
  const paramsGetTitle = {
    code: code,
    ...paramFilter,
  };

  return anilibriaApiInstance1(
    'getTitle',
    paramsGetTitle,
    ({
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
    }) => {
      return {
        announce,
        code,
        description,
        genres: genres.length ? genres : null,
        names: Object.values(names).filter((heading) => heading),
        player,
        poster: `https://www.anilibria.tv${
          posters.original.url || posters.medium.url || posters.small.url
        }`,
        time: { season: season.string, year: season.year, day: daysInAWeek[season.week_day] },
        status,
        team: Object.entries(team)
          .filter((el) => el[1].length)
          .map((e) => ({ type: e[0], members: e[1] })),
        torrents,
        type: type.full_string,
      };
    },
  );
};

export const getRandom = () =>
  anilibriaApiInstance1('getRandomTitle', { filter: 'code' }, ({ code }) => code);

const paramsAnimeListForSide = {
  filter: 'code,names.ru,description,torrents.series.string,posters,torrents.list[0].torrent_id',
};

export const getAnimeListForSide = (params) =>
  anilibriaApiInstance1('getUpdates', { ...paramsAnimeListForSide, ...params });

const paramsSearchResults = {
  filter: 'code,names.ru',
  limit: 10,
};

export const getSearchResults = (searchValue) =>
  anilibriaApiInstance1('searchTitles', { ...paramsSearchResults, search: searchValue });
