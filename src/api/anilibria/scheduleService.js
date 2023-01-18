import { anilibriaApiInstance } from './../config';

const daysInAWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const paramsSchedule = {
  filter: 'code,names.ru,description,torrents.episodes.string,posters',
};

export const getSchedule = () =>
  anilibriaApiInstance
    .get('title/schedule', {
      params: paramsSchedule,
    })
    .then((res) =>
      res.data.map(({ day, list }) => ({
        day: daysInAWeek[day],
        items: list,
      })),
    );
