import { anilibriaApiInstance } from './../config';

export const getTeam = () =>
  anilibriaApiInstance
    .get('team')
    .then((res) => Object.entries(res.data).map((team) => ({ type: team[0], items: team[1] })));
