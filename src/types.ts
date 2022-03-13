export type globalNavigationItems = {
  navs: Array<{
    to: string
    text: string
    svg: string
  }>
  links: Array<{
    to: string
    text: string
    svg: string
  }>
}

export type animeList = Array<animeItem>

export type animeItem = {
  code: string
  announce: string | null
  status: {
    string: string
    code: 1 | 2
  }
  names: {
    ru: string
    en: string
  }
  player: player
  description: string
  posters: posters
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

export type player = {
  host: string
  playlist: {
    1: {
      serie: number
      hls: hls
    }
  }
}
export type posters = {
  small?: {
    url: string
  }
  medium?: {
    url: string
  }
  original?: {
    url: string
  }
}

export type hls = {
  fhd: string
  hd: string
  sd: string
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
  after?: number
}

export type searchResults = Array<{
  code: string
  names: {
    ru: string
  }
}>
