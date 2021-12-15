export type animeList = Array<animeItem>

export type animeItem = {
  code: string
  names: {
    ru: string
    en: string
  }
  description: string
  poster: {
    url: string
  }
  season: {
    string: string
    year: number
    week_day: number
  }
  type: {
    full_string: string
  }
  genres: Array<string>
  team: {
    voice: Array<string>
    translator: Array<string>
    editing: Array<string>
    decor: Array<string>
    timing: Array<string>
  }
  torrents: {
    series: {
      string: string
    }
    list: [
      {
        torrent_id?: number
      }
    ]
  }
}

export type typeSchedule = Array<{
  day: number
  list: animeList
}>

export type youtubeType = Array<{
  id: number
  image: string
  title: string
  youtube_id: string
}>

export type selectValues = Array<{ value: number | string; label: number | string }>

export type passedParamsAdvancedSearch = {
  query: string
  order_by: string
}
