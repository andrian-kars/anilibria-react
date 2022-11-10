import { anilibriaApiInstance } from './config';

export const getTeam = () =>
  anilibriaApiInstance('getTeam', null, (data) =>
    Object.entries(data.team).map((team) => ({ type: team[0], items: team[1] })),
  );
