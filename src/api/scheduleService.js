import { anilibriaApiInstance1 } from './config';

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
  anilibriaApiInstance1('getSchedule', paramsSchedule, (data) =>
    data.map(({ day, list }) => ({
      day: daysInAWeek[day],
      items: list,
    })),
  );
