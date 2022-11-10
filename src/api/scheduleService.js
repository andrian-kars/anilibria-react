import { anilibriaApiInstance } from './config';

const daysInAWeek = [
  'ПОНЕДЕЛЬНИК',
  'ВТОРНИК',
  'СРЕДА',
  'ЧЕТВЕРГ',
  'ПЯТНИЦА',
  'СУББОТА',
  'ВОСКРЕСЕНЬЕ',
];

const paramsSchedule = {
  filter: 'code,names.ru,description,torrents.series.string,posters',
};

export const getSchedule = () =>
  anilibriaApiInstance('getSchedule', paramsSchedule, (data) =>
    data.map(({ day, list }) => ({
      day: daysInAWeek[day],
      items: list,
    })),
  );