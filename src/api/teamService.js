import { anilibriaApiInstance1 } from './config';

export const getTeam = () =>
  anilibriaApiInstance1('getTeam', null, (data) =>
    Object.entries(data.team).map((team) => ({ type: team[0], items: team[1] })),
  );
