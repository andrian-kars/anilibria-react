import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.anilibria.tv/v2/',
})

export const getSchedule = () => {
  return instance
    .get('getSchedule?filter=code,names.ru,description,torrents.series.string,poster.url')
    .then((res) => {
      console.log('fff')

      console.log(res.data)
    })
}
