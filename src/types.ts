export type animeList = Array<animeItem>

export type animeItem = {
  code: string
  names: {
    ru: string
  }
  description: string
  poster: {
    url: string
  }
  torrents: {
    series: {
      string: string
    }
    list: [
      null,
      {
        torrent_id?: number
      }
    ]
  }
}
