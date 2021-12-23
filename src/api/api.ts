import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.anilibria.tv/v2/',
  headers: {
    // 'Access-Control-Allow-Origin': '*',
  },
})
